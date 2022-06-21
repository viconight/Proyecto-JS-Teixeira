const allMangas = mangas

let carrito=[]


class Manga{
  constructor(manga) {
      this.id = manga.id;
      this.nombre = manga.nombre;
      this.editorial= manga.editorial;
      this.precio = manga.precio;
      this.imagen =manga.imagen;
      this.cantidad = 1;
  }

}



imprimirProductosEnHTML(mangas)

function imprimirProductosEnHTML(mangas) {
  let mangaIvrea = document.getElementById("mangaIvrea");

  for (const manga of mangas) {
    let card = document.createElement("div");

    card.innerHTML =`
    <div class="card" >
           <div class="card-body">
               <img src="${manga.imagen}" class="card-img-top" alt="" width="200" height="270">
               <h5 class="card-title">${manga.nombre}</h5>
               <p class="card-text">$${manga.precio}</p>
               <div class="btn-group" role="group" aria-label="Basic mixed styles example">
               <button id="btn${manga.id}" type="button" class="btn btn-dark">Agregar al carrito </button>
               </div>
           </div>
       </div> 
        `
    mangaIvrea.append(card)
  }

  for (const manga of mangas) {
    document.getElementById(`btn${manga.id}`).addEventListener('click', function() {
       agregarAlCarrito(manga);
     });
   };

}

if(localStorage.getItem("carrito")!=null){
  carrito=JSON.parse(localStorage.getItem("carrito"));
  actualizarTabla()
}else{
  carrito=[]
}


function agregarAlCarrito(nuevoManga) {
  let encontrado = carrito.find(p => p.id == nuevoManga.id);
  console.log(encontrado);
  if (encontrado == undefined) {
   let mangaCarrito= new Manga (nuevoManga);
 carrito.push(mangaCarrito);
 console.log(carrito);
 Swal.fire(
    "Manga: "+nuevoManga.nombre,
    "Se agrego al carrito",
    "success"
  );
 document.getElementById("tabla").innerHTML+=`
 <tr>
     <td>${mangaCarrito.editorial}</td>
     <td>${mangaCarrito.nombre}</td>
     <td id='${mangaCarrito.id}'> ${mangaCarrito.cantidad}</td>
     <td>${mangaCarrito.precio}</td>
     
 </tr>`;

}else {
  let posicion = carrito.findIndex(p => p.id == nuevoManga.id);
  carrito[posicion].cantidad += 1;
  Swal.fire(
      "Se agrego otra unidad de "+nuevoManga.nombre,
      "Se agrego al carrito",
      "success"
    );
  document.getElementById(nuevoManga.id).innerHTML=carrito[posicion].cantidad;
}
document.querySelector("#precioTotal").innerText=(`Total: $ ${calcularTotal()}`);
localStorage.setItem("carrito",JSON.stringify(carrito));
}

//Funcion Suma Total
function calcularTotal() {
  let suma = 0;
  for (const manga of carrito) {
      suma = suma + (manga.precio * manga.cantidad);
  }
  return suma;
}
//funcion para actualizar la tabla con el storage
function actualizarTabla (){
  for (const manga of carrito){
     document.getElementById("tabla").innerHTML+=`
     <tr>
     <td>${manga.editorial}</td>
     <td>${manga.nombre}</td>
     <td id='${manga.id}'> ${manga.cantidad}</td>
     <td>${manga.precio}</td>
 </tr>`
  }document.querySelector("#precioTotal").innerText=(`Total: $ ${calcularTotal()}`);
}

//-botones del carrito

const btnfinalizar = document.getElementById('finalizar')
btnfinalizar.addEventListener('click', ()=> {
  if ((carrito).length !== 0){
    Swal.fire({
      title: "Pedido confirmado",
      icon: 'success',
    })
    eliminarFila ()
  }else{
    Swal.fire({
      title: 'No Podemos Aceptar La solicitud ',
      text: 'Debes llenar tu carrito!',
      imageUrl: 'https://c.tenor.com/JaJJkYeLc6oAAAAC/ok-anime.gif',
    })

  }
})

let borrarCarrito =document.getElementById("borrarCarrito");
borrarCarrito.onclick=()=>{
   eliminarFila()
    Swal.fire({
        title: 'Carrito Vacio!',  
    });
    
   }
   
function eliminarFila(){
   tabla.innerHTML=''
   carrito= []
   localStorage.setItem("carrito",JSON.stringify(carrito))
   document.querySelector("#precioTotal").innerText=(`Total: $ ${calcularTotal()}`);

}
