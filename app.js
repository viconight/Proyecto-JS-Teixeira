const mangas = [{
   id : "0",
   nombre:'One Piece',
   editorial:'Ivrea',
   imagen:"media/onepiece.png",
   precio:750,
},
{
   id : "1",
   nombre:'Hunter x Hunter', 
   editorial:'Ivrea',
   imagen:"media/hunter.png",
   precio: 750,
},
{
   id : "2",
   nombre:'Shaman King',  
   editorial:'Ivrea',
   imagen:"media/shaman.png",
   precio: 1550,
},
{   
   id : "3",
   nombre:'Yu Yu Hakusho',  
   editorial:'Ivrea',
   imagen:"media/yuyu.png",
   precio: 2000,
},
{
   id : "4",
   nombre:'Pandora Hearts', 
   editorial:'Ivrea',
   imagen:"media/pandora.png",
   precio: 850,
},
{
   id : "5",
   nombre:'Fullmetal Alchemist', 
   editorial:'Ivrea',
   imagen:"media/fullmetal.png",
   precio: 750,
},
{
   id : "6",
   nombre:'Inuyasha', 
   editorial:'Ivrea',
   imagen:"media/inuyasha.png",
   precio: 1450,
},
{
   id : "7",
   nombre:'Spy x Family', 
   editorial:'Ivrea',
   imagen:"media/spyxfamily.png",
   precio: 750,
},
]

let carrito=[]

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

  mangas.forEach(manga => {
   document.getElementById(`btn${manga.id}`).addEventListener('click', function() {
      agregarAlCarrito(manga);
    });
  });

}

function agregarAlCarrito(nuevoManga) {
   carrito.push(nuevoManga);
   console.log(carrito);
   alert("Agregamos el Manga "+nuevoManga.nombre+" al carrito!")
   document.getElementsByClassName("mangas").innerHTML+=`
   <tr>
       <td>${nuevoManga.nombre}</td>
       <td>${nuevoManga.precio}</td>
       <td>${nuevoManga.imagen}</td>
   </tr>`;
}


