/**
 * Comprovar si ha entrado alguna vez a la pagina para iniciar las variables del localstorage
 */
if(!localStorage.getItem("usuarioactual")){
    localStorage.setItem("usuarioactual","-");
    localStorage.setItem("passactual","-");
    location.reload();
}
if(localStorage.getItem("usuarioactual") == localStorage.getItem("usuario")&&localStorage.getItem("passactual") == localStorage.getItem("pass")){
/**
 * Variables con toda la informacion
 */
const addboton = document.querySelector("#añadirbtn0");
const btnañadirzona = document.querySelector("#añadirzona");
const btnfondo = document.querySelector("#fondo");
const titulo = document.querySelector("#tituloimp0");
var imput = document.getElementById("añadirimp0");
var ul = document.querySelector("#lista0");
const boton = document.querySelector("#añadirbtn0");
var array = localStorage.getItem("textos");
var array2 = localStorage.getItem("textos2");
var array3 = localStorage.getItem("textos3");
var array4 = localStorage.getItem("textos4");
var array5 = localStorage.getItem("textos5");
var array6 = localStorage.getItem("textos6");
var array7 = localStorage.getItem("textos7");
var array8 = localStorage.getItem("textos8");
var array9 = localStorage.getItem("textos9");
var array10 = localStorage.getItem("textos10");
var arraytime = localStorage.getItem("textostime");
var array2time = localStorage.getItem("textos2time");
var array3time = localStorage.getItem("textos3time");
var array4time = localStorage.getItem("textos4time");
var array5time = localStorage.getItem("textos5time");
var array6time = localStorage.getItem("textos6time");
var array7time = localStorage.getItem("textos7time");
var array8time = localStorage.getItem("textos8time");
var array9time = localStorage.getItem("textos9time");
var array10time = localStorage.getItem("textos10time");

var zonas = localStorage.getItem("zonas");
const body2 = document.getElementsByTagName("body");
body2[0].style.backgroundImage = localStorage.getItem("fondo");

/**
 * Iniciadores de arrays con los datos de todas las tarjetas
 */
//1
if(array != null){array = array.split(",");
    if(array[0]==""){array = [];}
}else{array = [];}

if(arraytime != null){arraytime = arraytime.split(",");
    if(arraytime[0]==""){arraytime=[];}
}else{arraytime = [];}
//2
if(array2 != null){array2 = array2.split(",");
    if(array2[0]==""){array2 = [];}
}else{array2 = [];}
if(array2time != null){array2time = array2time.split(",");
    if(array2time[0]==""){array2time = [];}
}else{array2time = [];}

//3
if(array3 != null){array3 = array3.split(",");
    if(array3[0]==""){array3 = [];}
}else{array3 = [];}

if(array3time != null){array3time = array3time.split(",");
    if(array3time[0]==""){array3time = [];}
}else{array3time = [];}
//4
if(array4 != null){array4 = array4.split(",");
    if(array4[0]==""){array4 = [];}
}else{array4 = [];}
if(array4time != null){array4time = array4time.split(",");
    if(array4time[0]==""){array4time = [];}
}else{array4time = [];}
//5
if(array5 != null){array5 = array5.split(",");
    if(array5[0]==""){array5 = [];}
}else{array5 = [];}
if(array5time != null){array5time = array5time.split(",");
    if(array5time[0]==""){array5time = [];}
}else{array5time = [];}
//6
if(array6 != null){array6 = array6.split(",");
    if(array6[0]==""){array6 = [];}
}else{array6 = [];}
if(array6time != null){array6time = array6time.split(",");
    if(array6time[0]==""){array6time = [];}
}else{array6time = [];}
//7
if(array7 != null){array7 = array7.split(",");
    if(array7[0]==""){array7 = [];}
}else{array7 = [];}
if(array7time != null){array7time = array7time.split(",");
    if(array7time[0]==""){array7time = [];}
}else{array7time = [];}
//8
if(array8 != null){array8 = array8.split(",");
    if(array8[0]==""){array8 = [];}
}else{array8 = [];}
if(array8time != null){array8time = array8time.split(",");
    if(array8time[0]==""){array8time = [];}
}else{array8time = [];}
//9
if(array9 != null){array9 = array9.split(",");
    if(array9[0]==""){array9 = [];}
}else{array9 = [];}
if(array9time != null){array9time = array9time.split(",");
    if(array9time[0]==""){array9time = [];}
}else{array9time = [];}
//10
if(array10 != null){array10 = array10.split(",");
    if(array10[0]==""){array10 = [];}
}else{array10 = [];}
if(array10time != null){array10time = array10time.split(",");
    if(array10time[0]==""){array10time = [];}
}else{array10time = [];}
//zonas
if(zonas != null){
    if(zonas[0]==""){zonas = 1;}
}else{zonas = 1;}
//cargar la primera zona
cargarlista(array,ul,0,"textos","textostime",arraytime);
//Boton para cambiar fondo
btnfondo.addEventListener("click",(e) =>{cambiarfondo(e);})
//evento para añadir tareas al pulsar intro
imput.addEventListener("keypress",function (e) {if(e.keyCode == "13"){añadirtarea(ul,imput,"textos",array,"textostime",arraytime);}})
//Evento para guardar el texto escrito al perder el foco
titulo.addEventListener("focusout",(e) =>{localStorage.setItem("titulo",titulo.value);})
//Evento para añadir zonas al hacer click
btnañadirzona.addEventListener("click",(e) =>{añadirzona(zonas);})
//dibujar el titulo de la 1º tarjeta
titulo.value = localStorage.getItem("titulo")
/**
 * Si las zonas superan a 9 el boton de añadir zonas se deshabilita
 */
for (let x = 1; x < zonas; x++) {cargarzonas(x);}
if(zonas>9){var bota= document.getElementById("añadirzona").setAttribute("disabled","");}

/**
 * Guardar la posicion del scroll horizontal al refrescar la pagina
 */
window.onload=function(){
    var pos=window.name || 0;
    window.scrollTo(pos,0);
    }
    window.onunload=function(){
    window.name=self.scrollX || (document.documentElement.scrollLeft+document.body.scrollLeft);
    }

}

/**
 * Hacer el scroll en horizontal solo cuando este fuera de un div
 */
const scrollContainer = document.querySelector("html");
var scrolly= "true";
var divs = document.getElementsByClassName("lista1");
for (let p = 0; p < divs.length; p++) {
    divs[p].addEventListener("mouseover",(e) =>{
        scrolly = "false";
    })
    divs[p].addEventListener("mouseout",(e) =>{
        scrolly = "true";
    })
}
    scrollContainer.addEventListener("wheel", (evt) => {
        if(scrolly == "true"){
            scrollContainer.scrollLeft += evt.deltaY;
        }
    });

