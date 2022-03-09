// creando un arreglo de objetos

    let productos =[

        {foto: 'img/mediacartablanco.jpg',nombre:"cuaderno media carta",precio:35000,descripcion:"cuaderno media carta color blanco"},
        {foto: 'img/lapiceros.png',nombre:"Lapicero",precio:8000,descripcion:"lapicero personalizado"},
        {foto: 'img/mapasueños.png',nombre:"Mapa de sueños",precio:8000,descripcion:"lapicero personalizado"},
        {foto: 'img/mediacartaoscuro.jpg',nombre:"cuaderno media carta ",precio:35000,descripcion:"cuaderno media carta color oscuro"},
        {foto: 'img/mediacartablanco.jpg',nombre:"Cuaderno carta",precio:55000,descripcion:"Cuaderno tamaño carta color blanco"},
        {foto: 'img/mediacartaoscuro.jpg',nombre:"Cuaderno carta",precio:55000,descripcion:"Cuaderno tamaño carta color oscuro"},
        {foto: 'img/basos.png',nombre:"vasos",precio:8500,descripcion:"mug personalizado"},
        {foto: 'img/llavero.png',nombre:"llavero",precio:8000,descripcion:"Llavero personalizado"},
        {foto: 'img/agenda.png',nombre:"Agenda",precio:60000,descripcion:"Agenda personalizado"},
        {foto: 'img/portaretratos.png',nombre:"Porta retratos",precio:8000,descripcion:"Porta retratos personalizado"}

    ]
    //como recorrer un arreglo con js
    //1.creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productos.forEach(function(producto){
        console.log(producto.nombre)
        console.log(producto.precio)
       
        //pintando etiquetas
        //div con la clase col
        let columna=document.createElement("div")
        columna.classList.add("col")

        //div con las clases card h100

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //necesito un img con la clase card-img-top

        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto

        


        //tex
        let titulo=document.createElement("h4")
        titulo.classList.add("card-title")
        titulo.textContent=producto.nombre

        //padres e hijos

        tarjeta.appendChild(titulo)
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
        

    })