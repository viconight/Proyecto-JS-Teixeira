class Manga {
    constructor (manga) {
 
       this.id = manga.id;
       this.nombre = manga.nombre;
       this.editorial = manga.editorial;
       this.precio = manga.precio;
       this.formato = manga.formato;
       this.cantidad = 1;
       this.precioTotal = +manga.precio;
    
    }
 
    agregarManga () {
    this.cantidad++;
    }
 
    quitarManga(){
       this.cantidad--;
 
    }
 
    actualizarPrecioTotal(){
       this.precioTotal * this.cantidad;
    }
 
 }
 
 const mangas = [{id:'0', nombre: 'one piece', editorial: 'editorial ivrea',precio: 750,formato: 'tankoubon chico'},
 {id:'1',nombre: 'shaman king',editorial: 'editorial ivrea',precio: 1550,formato: 'B6 doble'},
 {id:'2',nombre: 'hellsing',editorial: 'editorial ivrea',precio: 750,formato: 'tankoubon chico'},
 {id:'3',nombre: 'noragami',editorial: 'editorial panini',precio: 750,formato: 'tankoubon chico'},
 {id:'4',nombre: 'negima',editorial: 'editorial panini',precio: 1100,formato: 'B6 doble'},
 {id:'5',nombre: 'pokemon',editorial: 'editorial panini',precio: 750 ,formato: 'tankoubon chico'}]
 
 
 let carrito=[]
 let sumaTotal
 
 function menuDeCompras() {
    let stringsProductos = ""
 
    for (const manga of mangas){
       stringsProductos+= `${manga.id} : ${manga.nombre} $ ${manga.precio} \n`;
    }
     let idProducto = prompt(`Escriba el Numero para comprar un Manga o ESC para salir:\n${stringsProductos}\n `);
 
      while (idProducto!== "ESC" ){
         let mangaEnCarrito = carrito.find((elemento) => elemento.id == idProducto);
 
         if (mangaEnCarrito) {
            let index = carrito.findIndex((elemento) => elemento.id === mangaEnCarrito.id);
 
            carrito [index ].agregarManga ();
            carrito [index].actualizarPrecioTotal()
 
            alert (`Se añadio otra unidad del Manga seleccionado ${carrito[index].nombre}`);
 
            console.table(carrito);
         } else {
          carrito.push(new Manga (mangas[idProducto]));;
 
            alert  (`Se agrego al carrito el Manga ${mangas[idProducto].nombre} `)
         }
 
         idProducto = prompt (`Desea seguir comprando Mangas? Escribra el Numero para seleccionar otro o escriba ESC para salir\n${stringsProductos}`);
      }
 }
 
 function sumarPrecioTotal() {
    let precioTotal = 0;
    for (const mangas of carrito) {
        precioTotal += mangas.precioTotal;
    }
 
    return precioTotal;
 }
 
 menuDeCompras();
 precioTotal = sumarPrecioTotal();
 
 alert(`El precio total de tu compra es de $${precioTotal}`);
 
 console.log(carrito)
 