var mensaje = document.getElementById("mensaje");
var userzone = document.getElementById("registraruser");
var passzone = document.getElementById("registrarpass");
var botoncin = document.getElementById("registrarbtn");


botoncin.addEventListener("click", (e)=>{
    localStorage.setItem("usuario",userzone.value);
    localStorage.setItem("pass",passzone.value);
    localStorage.setItem("sesionactiva","true");
    location.reload();
})
if(localStorage.getItem("sesionactiva")=="true"){
    mensaje.style.display = "block";
}else{
    mensaje.style.display = "none";
}

