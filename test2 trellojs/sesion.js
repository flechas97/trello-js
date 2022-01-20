    var cerrarsesion = document.getElementById("cerrar");
    var userdiv = document.getElementById("userc");
    var passdiv = document.getElementById("passc");
    var inicdiv = document.getElementById("inicc");
    var regidiv = document.getElementById("regic");
    cerrarsesion.style.display = "none";
    // localStorage.setItem("usuario","1234");
    // localStorage.setItem("pass","1234");
    
    cerrarsesion.addEventListener("click", (e) =>{
        cerrarsesionbtn();
    })
    inicdiv.addEventListener("click",(e)=>{
        iniciarsesion();
    })
    if(localStorage.getItem("usuarioactual") == localStorage.getItem("usuario")&&localStorage.getItem("passactual") == localStorage.getItem("pass")){
        cerrarsesion.style.display = "block";
        userdiv.style.display = "none";
        passdiv.style.display = "none";
        inicdiv.style.display = "none";
        regidiv.style.display = "none";
    }
    function iniciarsesion() {
        var usuario = document.getElementById("user");
        var pass = document.getElementById("pass");
        localStorage.setItem("usuarioactual",usuario.value);
        localStorage.setItem("passactual",pass.value);
        if(usuario.value == localStorage.getItem("usuario")&&pass.value == localStorage.getItem("pass")){

        }
    }
    function cerrarsesionbtn() {
        localStorage.setItem("usuarioactual","");
        localStorage.setItem("passactual","");
    }
    // if(localStorage.getItem("usuario")=="1234"&&localStorage.getItem("pass")=="1234"){
    //     cerrarsesion.style.display = "block";
    //     userdiv.style.display = "none";
    //     passdiv.style.display = "none";
    //     inicdiv.style.display = "none";
    //     regidiv.style.display = "none";
    // }else{
        
    // }
