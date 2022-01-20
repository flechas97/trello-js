//import * as funciones from 'funciones.mjs';

const addboton = document.querySelector("#añadirbtn0");
const btnañadirzona = document.querySelector("#añadirzona")
const titulo = document.querySelector("#tituloimp0")
var imput = document.querySelector("#añadirimp0");

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
var zonas = localStorage.getItem("zonas");
//1
if(array != null){
    array = array.split(",");
    if(array[0]==""){
        array = [];
    }
}else{
    array = [];  
}
//2
if(array2 != null){
    array2 = array2.split(",");
    if(array2[0]==""){
        array2 = [];
    }
}else{
    array2 = [];  
}
//3
if(array3 != null){
    array3 = array3.split(",");
    if(array3[0]==""){
        array3 = [];
    }
}else{
    array3 = [];  
}
//4
if(array4 != null){
    array4 = array4.split(",");
    if(array4[0]==""){
        array4 = [];
    }
}else{
    array4 = [];  
}
//5
if(array5 != null){
    array5 = array5.split(",");
    if(array5[0]==""){
        array5 = [];
    }
}else{
    array5 = [];  
}
//6
if(array6 != null){
    array6 = array6.split(",");
    if(array6[0]==""){
        array6 = [];
    }
}else{
    array6 = [];  
}
//7
if(array7 != null){
    array7 = array7.split(",");
    if(array7[0]==""){
        array7 = [];
    }
}else{
    array7 = [];  
}
//8
if(array8 != null){
    array8 = array8.split(",");
    if(array8[0]==""){
        array8 = [];
    }
}else{
    array8 = [];  
}
//9
if(array9 != null){
    array9 = array9.split(",");
    if(array9[0]==""){
        array9 = [];
    }
}else{
    array9 = [];  
}
//10
if(array10 != null){
    array10 = array10.split(",");
    if(array10[0]==""){
        array10 = [];
    }
}else{
    array10 = [];  
}
//----------
if(zonas != null){
    if(zonas[0]==""){
        zonas = 1;
    }
}else{
    console.log(2)
    zonas = 1;  
}
cargarlista(array,ul,0,"textos");


console.log(array);
console.log(zonas);
addboton.addEventListener("click",(e) =>{
    añadirtarea(ul,imput,"textos",array);
})
titulo.addEventListener("focusout",(e) =>{
    titulo.style.borderColor = "rgb(60, 255, 0)";
    localStorage.setItem("titulo",titulo.value);
})
titulo.addEventListener("focusin",function (e) {
    titulo.style.borderColor = "red";
})
titulo.value = localStorage.getItem("titulo")
btnañadirzona.addEventListener("click",(e) =>{
    añadirzona(zonas);
})
for (let x = 1; x < zonas; x++) {
    cargarzonas(x);
}
if(zonas>9){
var bota= document.getElementById("añadirzona").setAttribute("disabled","");
}

window.onload=function(){
    var pos=window.name || 0;
    window.scrollTo(pos,0);
    }
    window.onunload=function(){
    window.name=self.scrollX || (document.documentElement.scrollLeft+document.body.scrollLeft);
    }


const scrollContainer = document.querySelector("html");

scrollContainer.addEventListener("wheel", (evt) => {
    scrollContainer.scrollLeft += evt.deltaY;
});

// if(a == false){
//     scrollContainer.addEventListener("wheel", (evt) => {
//         scrollContainer.scrollLeft += evt.deltaY;
//     });
// }
