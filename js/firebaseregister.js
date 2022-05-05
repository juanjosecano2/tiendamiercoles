import { } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"

let boton=document.getElementById("botonregistro")
boton.addEventListener("click",function(evento){
  evento.preventDefault()
  let email=document.getElementById("emailAddress").value
  let passwd=document.getElementById("password").value
  console.log(email,passwd)
})