// creando un arreglo de objetos

let productos = [
  {
    foto: "img/mediacartablanco.jpg",
    nombre: "Cuaderno media carta",
    precio: 35000,
    descripcion: "Cuaderno media carta color blanco",
  },
  {
    foto: "img/lapiceros.png",
    nombre: "Lapicero",
    precio: 8000,
    descripcion: "Lapicero personalizado",
  },
  {
    foto: "img/mapasueños.png",
    nombre: "Porta retratos",
    precio: 8000,
    descripcion: "Porta retratos",
  },
  {
    foto: "img/mediacartaoscuro.jpg",
    nombre: "Cuaderno media carta ",
    precio: 35000,
    descripcion: "Cuaderno media carta color oscuro",
  },
  {
    foto: "img/mediacartablanco.jpg",
    nombre: "Cuaderno carta",
    precio: 55000,
    descripcion: "Cuaderno tamaño carta color blanco",
  },
  {
    foto: "img/mediacartaoscuro.jpg",
    nombre: "Cuaderno carta",
    precio: 55000,
    descripcion: "Cuaderno tamaño carta color oscuro",
  },
  {
    foto: "img/vasos.png",
    nombre: "Mug",
    precio: 8500,
    descripcion: "Mug personalizado",
  },
  {
    foto: "img/llavero.png",
    nombre: "Llavero",
    precio: 8000,
    descripcion: "Llavero personalizado",
  },
  {
    foto: "img/agenda.png",
    nombre: "Agenda",
    precio: 60000,
    descripcion: "Agenda personalizada",
  },
  {
    foto: "img/portaretratos.png",
    nombre: "Porta retratos",
    precio: 8000,
    descripcion: "Porta retratos personalizado",
  },
];
//como recorrer un arreglo con js
//1.creo una variable para almacenar la base sobre la cual voy a pintar
let fila = document.getElementById("fila");
productos.forEach(function (producto) {
  //pintando etiquetas
  //div con la clase col
  let columna = document.createElement("div");
  columna.classList.add("col");
  columna.classList.add("mb-5");

  //div con las clases card h100

  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card");
  tarjeta.classList.add("h-100");

  //necesito un img con la clase card-img-top

  let foto = document.createElement("img");
  foto.classList.add("card-img-top");
  foto.src = producto.foto;

  //cardbody
  let cardbody = document.createElement("div");
  cardbody.classList.add("card-body");
  cardbody.classList.add("p-4");

  //tex
  let titulo = document.createElement("h6");
  titulo.classList.add("fw-bolder");
  titulo.classList.add("text-center");
  titulo.textContent = producto.nombre;

  //price
  let precio = document.createElement("p");
  precio.classList.add("text-center");
  precio.textContent = "$" + producto.precio;

  //description
  let description = document.createElement("p");
  description.classList.add("text-center");
  description.textContent = producto.descripcion;

  //products actions
  let cardfooter = document.createElement("div");
  cardfooter.classList.add("card-footer");
  cardfooter.classList.add("p-4");
  cardfooter.classList.add("pt-0");
  cardfooter.classList.add("border-top-0");
  cardfooter.classList.add("bg-transparent");

  let lugarbtn = document.createElement("div");
  lugarbtn.classList.add("text-center");

  let btncard = document.createElement("a");
  btncard.classList.add("btn");
  btncard.classList.add("btn-outline-dark");
  btncard.classList.add("mt-auto");
  btncard.textContent = "Add to cart";

  //padres e hijos

  tarjeta.appendChild(foto);
  tarjeta.appendChild(cardbody);
  cardbody.appendChild(titulo);
  cardbody.appendChild(precio);
  cardbody.appendChild(description);
  tarjeta.appendChild(cardfooter);
  cardfooter.appendChild(lugarbtn);
  lugarbtn.appendChild(btncard);
  columna.appendChild(tarjeta);
  fila.appendChild(columna);
});
