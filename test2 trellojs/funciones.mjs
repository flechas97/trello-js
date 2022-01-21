
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
    var texto = document.createTextNode("+");
    var titulo = document.createElement("input");
    titulo.setAttribute("id","tituloimp"+id);
    titulo.setAttribute("class","titulos");
    titulo.setAttribute("placeholder","Nuevo titulo");
    titulo.value = "Titulo";
    cajon.appendChild(titulo);
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
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul2,imput2,"textos2",array2); 
        })
        titulo.addEventListener("focusout",function (e) {
            titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
        titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
    }else if(id==2){
        var ul3 = document.querySelector("#lista2");
        var imput3 = document.querySelector("#añadirimp2");
        cargarlista(array3,ul3,2,"textos3");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul3,imput3,"textos3",array3); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
                titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
    }else if(id==3){
        var ul4 = document.querySelector("#lista3");
        var imput4 = document.querySelector("#añadirimp3");
        cargarlista(array4,ul4,3,"textos4");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul4,imput4,"textos4",array4); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
        titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
    }else if(id==4){
        var ul5 = document.querySelector("#lista4");
        var imput5 = document.querySelector("#añadirimp4");
        cargarlista(array5,ul5,4,"textos5");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul5,imput5,"textos5",array5); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
                titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
    }else if(id==5){
        var ul6 = document.querySelector("#lista5");
        var imput6 = document.querySelector("#añadirimp5");
        cargarlista(array6,ul6,5,"textos6");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul6,imput6,"textos6",array6); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
                titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
    }else if(id==6){
        var ul7 = document.querySelector("#lista6");
        var imput7 = document.querySelector("#añadirimp6");
        cargarlista(array7,ul7,6,"textos7");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul7,imput7,"textos7",array7); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
                titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
        
    }else if(id==7){
        var ul8 = document.querySelector("#lista7");
        var imput8 = document.querySelector("#añadirimp7");
        cargarlista(array8,ul8,7,"textos8");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul8,imput8,"textos8",array8); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
                titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
        
    }else if(id==8){
        var ul9 = document.querySelector("#lista8");
        var imput9 = document.querySelector("#añadirimp8");
        cargarlista(array9,ul9,8,"textos9");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul9,imput9,"textos9",array9); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
                titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
        })
        
    }else if(id==9){
        var ul10 = document.querySelector("#lista9");
        var imput10 = document.querySelector("#añadirimp9");
        cargarlista(array10,ul10,9,"textos10");
        titulo.value = localStorage.getItem("titulo"+id);
        boton.addEventListener("click",function (e) {
            añadirtarea(ul10,imput10,"textos10",array10); 
        })
                titulo.addEventListener("focusout",function (e) {
                    titulo.style.borderColor = "rgb(60, 255, 0)";
            localStorage.setItem("titulo"+id,titulo.value);
            // añadirtarea(ul2,imput2,"textos2",array2); 
        })
                titulo.addEventListener("focusin",function (e) {
            titulo.style.borderColor = "red";
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
    location.reload();
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
    location.reload();
}
function cargarlista(array,ul,id,local) {
    for (let i = 0; i < array.length; i++) {
        //var objetos = localStorage.getItem("objetos")
        const text = array[i];
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.setAttribute("id","li"+id+i);
        li.setAttribute("class","lista1");
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(adddeletebtn(ul,local,array));
        //li.appendChild(addeditbtn(ul,local,array));
        ul.appendChild(li);
        li.addEventListener("dblclick",(e)=>{
            const divfondo = document.createElement("div");
            const div = document.createElement("div");
            const cancelar = document.createElement("button");
            const editimput = document.createElement("input");
            const confirmar = document.createElement("button");
            const h5 =document.createElement("h5");
            const texto = document.createTextNode("Confirmar");
            const texto2 = document.createTextNode("X");
            const texto3 = document.createTextNode("Editar tarjeta");
            const body2 = document.getElementsByClassName("container");
            const item = e.target.parentElement;
            cancelar.setAttribute("class","btn-delete cancel");
            cancelar.appendChild(texto2);
            elemento = item.getAttribute("id");
            elemento = elemento.substr(3);
            console.log("editar= "+elemento);
            editimput.setAttribute("class","editar");
            editimput.setAttribute("placeholder","Nuevo texto")
            confirmar.setAttribute("class","editarbtn");
            div.setAttribute("class","fondoedit");
            h5.appendChild(texto3)
            confirmar.appendChild(texto);
            divfondo.setAttribute("class","fondooscuro");
            div.appendChild(h5);
            div.appendChild(editimput);
            div.appendChild(confirmar);
            div.appendChild(cancelar);
            divfondo.appendChild(div);
            body2[0].appendChild(divfondo);
                confirmar.addEventListener("click",(e)=>{
                    array[elemento] = editimput.value;
                    localStorage.setItem(local,array);
                    location.reload();
                });  
                cancelar.addEventListener("click",(e)=>{
                    location.reload();
                });  
        });
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
        location.reload();
    })
    return deletebtn;
}
function addeditbtn(ul,local,array) {
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.className = "btn-edit";

    deletebtn.addEventListener("click", (e) =>{
        const editimput = document.createElement("input");
        const confirmar = document.createElement("button");
        const texto = document.createTextNode("Confirmar");
        const body2 = document.getElementsByClassName("container");
        const item = e.target.parentElement;
        elemento = item.getAttribute("id");
        elemento = elemento.substr(3);
        console.log("editar= "+elemento);
        editimput.setAttribute("class","editar");
        confirmar.setAttribute("class","editarbtn");
        confirmar.appendChild(texto);
        body2[0].appendChild(editimput);
        body2[0].appendChild(confirmar);
            confirmar.addEventListener("click",(e)=>{
                array[elemento] = editimput.value;
                localStorage.setItem(local,array);
                location.reload();
            });


        //array[elemento];
        //localStorage.setItem(local,array);
        
        //ul.removeChild(item);
        //location.reload();
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
