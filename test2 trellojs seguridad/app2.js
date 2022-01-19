import * as funciones from 'funciones.js';

const addboton = document.querySelector("#añadirbtn0");
const btnañadirzona = document.querySelector("#añadirzona")
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
btnañadirzona.addEventListener("click",(e) =>{
    añadirzona(zonas);
})
for (let x = 1; x < zonas; x++) {
    cargarzonas(x);
}
if(zonas>9){
var bota= document.getElementById("añadirzona").setAttribute("disabled","");
}


function cargarzonas(id){
    var crearzona = document.createElement("div");
    crearzona.setAttribute("class","zona"+id);
    crearzona.setAttribute("class","zonast");
    var cajon = document.createElement("div");
    cajon.setAttribute("class","cajon"+id);
    var imput = document.createElement("input");
    imput.setAttribute("id","añadirimp"+id);
    var boton = document.createElement("button");
    boton.setAttribute("id","añadirbtn"+id);
    var texto = document.createTextNode("añadir");
    boton.appendChild(texto);
    crearzona.appendChild(cajon);
    cajon.appendChild(imput);
    cajon.appendChild(boton);
    var ul = document.createElement("ul");
    ul.setAttribute("id","lista"+id);
    ul.setAttribute("class","lista");
    crearzona.appendChild(ul)
    var flex = document.getElementById("flex");
    flex.appendChild(crearzona)
    var ul2 = document.querySelector("#lista1");
    var imput2 = document.querySelector("#añadirimp1");
    if(id==1){
        cargarlista(array2,ul2,1,"textos2");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul2,imput2,"textos2",array2); 
        })
    }else if(id==2){
        var ul3 = document.querySelector("#lista2");
        var imput3 = document.querySelector("#añadirimp2");
        cargarlista(array3,ul3,2,"textos3");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul3,imput3,"textos3",array3); 
        })
    }else if(id==3){
        var ul4 = document.querySelector("#lista3");
        var imput4 = document.querySelector("#añadirimp3");
        cargarlista(array4,ul4,3,"textos4");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul4,imput4,"textos4",array4); 
        })
    }else if(id==4){
        var ul5 = document.querySelector("#lista4");
        var imput5 = document.querySelector("#añadirimp4");
        cargarlista(array5,ul5,4,"textos5");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul5,imput5,"textos5",array5); 
        })
    }else if(id==5){
        var ul6 = document.querySelector("#lista5");
        var imput6 = document.querySelector("#añadirimp5");
        cargarlista(array6,ul6,5,"textos6");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul6,imput6,"textos6",array6); 
        })
    }else if(id==6){
        var ul7 = document.querySelector("#lista6");
        var imput7 = document.querySelector("#añadirimp6");
        cargarlista(array7,ul7,6,"textos7");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul7,imput7,"textos7",array7); 
        })
        
    }else if(id==7){
        var ul8 = document.querySelector("#lista7");
        var imput8 = document.querySelector("#añadirimp7");
        cargarlista(array8,ul8,7,"textos8");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul8,imput8,"textos8",array8); 
        })
        
    }else if(id==8){
        var ul9 = document.querySelector("#lista8");
        var imput9 = document.querySelector("#añadirimp8");
        cargarlista(array9,ul9,8,"textos9");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul9,imput9,"textos9",array9); 
        })
        
    }else if(id==9){
        var ul10 = document.querySelector("#lista9");
        var imput10 = document.querySelector("#añadirimp9");
        cargarlista(array10,ul10,9,"textos10");
        boton.addEventListener("click",function (e) {
            añadirtarea(ul10,imput10,"textos10",array10); 
        })
        
    }
}
function añadirzona(id){
    var crearzona = document.createElement("div");
    crearzona.setAttribute("class","zona"+id);
    crearzona.setAttribute("class","zonast");
    var cajon = document.createElement("div");
    cajon.setAttribute("class","cajon"+id);
    var imput = document.createElement("input");
    imput.setAttribute("id","añadirimp"+id);
    var boton = document.createElement("button");
    boton.setAttribute("id","añadirbtn"+id);
    var texto = document.createTextNode("añadir");
    boton.appendChild(texto);
    crearzona.appendChild(cajon);
    cajon.appendChild(imput);
    cajon.appendChild(boton);
    var ul = document.createElement("ul");
    ul.setAttribute("id","lista"+id);
    ul.setAttribute("class","lista");
    crearzona.appendChild(ul)
    var flex = document.getElementById("flex");
    flex.appendChild(crearzona)
    var ul2 = document.querySelector("#lista1");
    var imput2 = document.querySelector("#añadirimp1");
    if(id==1){
    cargarlista(array2,ul2,1,"textos2");
    boton.addEventListener("click",function (e) {
        console.log("asd")
        añadirtarea(ul2,imput2,"textos2",array2); 
    })
}
    zonas++
    localStorage.setItem("zonas",zonas);
    window.location.href = "index.html";
}





function añadirtarea(ul,imput,local,array){
    // var objetos = localStorage.getItem("objetos")
    const text = imput.value;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    li.appendChild(p);
    li.appendChild(adddeletebtn());
    li.setAttribute("id","li"+array.length)
    ul.appendChild(li);
    imput.value = "";
    // objetos++;
    // localStorage.setItem("objetos",objetos);
    array.push(text);
    localStorage.setItem(local,array);
    window.location.href = "index.html";
}
function cargarlista(array,ul,id,local) {
    for (let i = 0; i < array.length; i++) {
        //var objetos = localStorage.getItem("objetos")
        const text = array[i];
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.setAttribute("id","li"+id+i)
        li.setAttribute("class","lista1")
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(adddeletebtn(ul,local,array));
        ul.appendChild(li);  
    }
}

function adddeletebtn(ul,local,array) {
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.className = "btn-delete";

    deletebtn.addEventListener("click", (e) =>{
        // array = localStorage.getItem("textos");
        // array = array.split(",");
        console.log(array);
        const item = e.target.parentElement;
        elemento = item.getAttribute("id");
        elemento = elemento.substr(3);
        array.splice(elemento,1);
        localStorage.setItem(local,array);
        console.log(array);
        ul.removeChild(item);
        window.location.href = "index.html";
    })
    return deletebtn;
}

// function borrarlista1(){
//     var li = document.getElementsByTagName("li")
//     var ul = document.getElementById("lista1");
//     console.log(li)
//     for (let i = 0; i < array.length; i++) {
//         ul.removeChild(li[i]);
//     }
    
// }
// borrarlista1();
