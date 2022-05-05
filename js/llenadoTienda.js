// creando un arreglo de objetos


export function llenartienda() {

    let productos = [{
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
    

    // CREO UNA VARIABLE PARA ALMACENAR LA BASE SOBRE LA QUE PINTAR
    let fila = document.getElementById("fila")

    //COMO RECORRERO UN ARREGLO CON JS
    //1. TENER ARREGLO
    productos.forEach(function(producto) {
        //console.log(producto.nombre)
        //console.log(producto.precio)
        //console.log(producto.foto)

        //2.pintando etiquetas


        //div con la clase col
        let columna = document.createElement("div")
        columna.classList.add("col")
        columna.classList.add("my-5")

        //div con las clases card h-100
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //img con la clase card-img-top
        let foto = document.createElement("img")
        foto.classList.add("card-img-top", "h-100", "w-100", "d-block", "rounded")
        foto.src = producto.foto

        //h4 con la clase text-center
        let nombre = document.createElement("h5")
        nombre.classList.add("text-center")
        nombre.textContent = producto.nombre

        //un Button en el precio para iniciar compra
        let precio = document.createElement("p")
        precio.classList.add("text-center")
        precio.textContent = producto.precio

        //un Button en el precio para iniciar compra
        let boton = document.createElement("button")
        boton.classList.add("btn", "w-50", "d-block", "mx-auto", "mt-4", "mb-3", "btn-outline-dark")
        boton.setAttribute("type", "button")
        boton.textContent = "ampliar info"

        //damos la descripcion pa antojar
        let descripcion = document.createElement("h6")
        descripcion.classList.add("card-body", "card-subtitle", "text-center", "mb-2", "text-muted")
        descripcion.textContent = producto.descripcion

        //3. padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(boton)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })
}