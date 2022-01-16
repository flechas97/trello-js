btnañadir1 = document.getElementById("btnañadir1");
inpañadir1 = document.getElementById("inpañadir1");



cont1 = document.getElementById("cont1");

numerotablasst = localStorage.getItem("tabla1textos");
numerotablasst2 = localStorage.getItem("tabla2textos");
zonas = localStorage.getItem("zonas");



iniciar();
function iniciar(){
    if(localStorage.getItem("tabla1textos")==null){
        localStorage.setItem("tabla1textos",0);
    }
    numerotablasst = localStorage.getItem("tabla1textos");
    for (let i = 0; i < numerotablasst; i++) {
        dibujartareas(cont1,"cont1",i); 
    }

    for (let k = 0; k < zonas; k++) {
        dibujarzonas();
    }
    if(document.getElementById("cont2")){
        btnañadir2 = document.getElementById("btnañadir2");
        inpañadir2 = document.getElementById("inpañadir2");
        cont2 = document.getElementById("cont2");
    for (let f = 0; f < numerotablasst2; f++) {
        dibujartareas(cont2,"cont2",f);
    }
}
}





btnañadir1.onclick = function (){
    texto1 = document.getElementById("inpañadir1").value;
    añadirtarea(cont1,"cont1",numerotablasst,"tabla1textos",texto1,"tabla1textos");
    //inpañadir1.value = "";
}
document.getElementById("añadirzona").onclick = function (){
    añadirzonas();
}
if(document.getElementById("btnañadir2")){
    btnañadir2.addEventListener("click", function () {
        texto1 = document.getElementById("inpañadir2").value;
        añadirtarea(cont1,"cont2",numerotablasst2,"tabla2textos",texto1,"tabla2textos");
        console.log("boton2")
    });

}


function dibujartareas(contenedor,cont,id){
    //localStorage.setItem("tabla1textos",numerotablas++);
    div= document.createElement("div");
    div.setAttribute("id","div"+cont+id);
    textarea = document.createElement("textarea");
    textarea.setAttribute("id","text"+cont+id);
    textarea.setAttribute("readonly","");
    textarea.value = localStorage.getItem("text"+cont+id);
    boton = document.createElement("button");
    boton.setAttribute("id","boton"+cont+id);
    texto = document.createTextNode("borrar");
    boton.appendChild(texto);
    boton2 = document.createElement("button");
    boton2.setAttribute("id","copiar"+cont+id);
    texto2 = document.createTextNode("copiar");
    boton2.appendChild(texto2);
    div.appendChild(textarea);
    div.appendChild(boton);
    div.appendChild(boton2);

    contenedor.appendChild(div); 

}
function añadirtarea(contenedor,cont,id,local,texto1,numerotablasxd){
    numerotablas= localStorage.getItem(numerotablasxd);
    if(numerotablas<10){
    numerotablas++;
    localStorage.setItem(local,numerotablas);
    div= document.createElement("div");
    div.setAttribute("id","div"+cont+id);
    textarea = document.createElement("textarea");
    textarea.setAttribute("id","text"+cont+id);
    textarea.setAttribute("readonly","");
    textoarea = document.createTextNode(texto1);
    textarea.value = texto1;
    boton = document.createElement("button");
    boton.setAttribute("id","boton"+cont+id);
    texto = document.createTextNode("borrar");
    boton.appendChild(texto);
    boton2 = document.createElement("button");
    boton2.setAttribute("id","copiar"+cont+id);
    texto2 = document.createTextNode("copiar");
    boton2.appendChild(texto);
    div.appendChild(textarea);
    div.appendChild(boton);
    div.appendChild(boton2);
    contenedor.appendChild(div);
    localStorage.setItem("text"+cont+id,texto1);
    console.log("añadida")
}
}
function dibujarzonas() {
    contenedor = document.createElement("div");
    contenedor.setAttribute("class","contenedor");
    contenedor.setAttribute("id","cont2");
    input = document.createElement("input");
    input.setAttribute("id","inpañadir2");
    añadir = document.createElement("a");
    añadir.setAttribute("href","index.html");
    btnañadir = document.createElement("button");
    btnañadir.setAttribute("id","btnañadir2");
    btntexto = document.createTextNode("Añadir tarea");
    document.getElementById("flex").appendChild(contenedor);
    contenedor.appendChild(input);
    contenedor.appendChild(añadir);
    añadir.appendChild(btnañadir);
    btnañadir.appendChild(btntexto); 
}
function añadirzonas(){
    var zonas = localStorage.getItem("zonas");
    zonas++;
    contenedor = document.createElement("div");
    contenedor.setAttribute("class","contenedor");
    contenedor.setAttribute("id","cont2");
    input = document.createElement("input");
    input.setAttribute("id","inpañadir2");
    añadir = document.createElement("a");
    //añadir.setAttribute("href","index.html");
    btnañadir = document.createElement("button");
    btnañadir.setAttribute("id","btnañadir2");
    btntexto = document.createTextNode("Añadir tarea");
    document.getElementById("flex").appendChild(contenedor);
    contenedor.appendChild(input);
    contenedor.appendChild(añadir);
    añadir.appendChild(btnañadir);
    btnañadir.appendChild(btntexto);
    localStorage.setItem("zonas",zonas);
    window.location = "index.html";
}
//pruebas
var array = [1,2,3,4,5];
localStorage.setItem("array",JSON.stringify(array));
hola = localStorage.getItem("array");
hola = JSON.parse(hola);
console.log(hola);




