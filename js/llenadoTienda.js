// creando un arreglo de objetos

    let productos =[

        {nombre:"cuaderno media carta",precio:35000,descripcion:"cuaderno media carta color blanco"},
        {nombre:"Lapicero",precio:8000,descripcion:"lapicero personalizado"},
        {nombre:"Mapa de sueños",precio:8000,descripcion:"lapicero personalizado"},
        {nombre:"cuaderno media carta ",precio:35000,descripcion:"cuaderno media carta color oscuro"},
        {nombre:"Cuaderno carta",precio:55000,descripcion:"Cuaderno tamaño carta color blanco"},
        {nombre:"Cuaderno carta",precio:55000,descripcion:"Cuaderno tamaño carta color oscuro"},
        {nombre:"Portavasos",precio:8500,descripcion:"Portavasos personalizado"},
        {nombre:"Base celular",precio:8000,descripcion:"Base celular personalizado"},
        {nombre:"Agenda",precio:60000,descripcion:"Agenda personalizado"},
        {nombre:"Porta retratos",precio:8000,descripcion:"Porta retratos personalizado"}

    ]
    //como recorrer un arreglo con js
    //1.tener un arreglo
    productos.forEach(function(producto){
        console.log(producto.nombre)
        console.log(producto.precio)
        
    })