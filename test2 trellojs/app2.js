const addboton = document.querySelector("#añadirbtn1");
const imput = document.querySelector("#añadirimp1");
const ul = document.querySelector("#lista1");
const boton = document.querySelector("#añadirbtn1");
var array = localStorage.getItem("textos");

if(array != null){
    array = array.split(",");
    
}else{
    array = [];
}

cargarlista();
console.log(array);

addboton.addEventListener("click",(e) =>{
    var objetos = localStorage.getItem("objetos")
    const text = imput.value;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    li.appendChild(p);
    li.appendChild(adddeletebtn());
    ul.appendChild(li);
    imput.value = "";
    objetos++;
    localStorage.setItem("objetos",objetos);
    array.push(text);
    localStorage.setItem("textos",array);
})
function cargarlista() {
    for (let i = 0; i < array.length; i++) {
        var objetos = localStorage.getItem("objetos")
        const text = array[i];
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.setAttribute("id","li"+i)
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(adddeletebtn());
        ul.appendChild(li);  
    }
}

function adddeletebtn() {
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.className = "btn-delete";

    deletebtn.addEventListener("click", (e) =>{
        const item = e.target.parentElement;
        elemento = item.getAttribute("id");
        elemento = elemento.substr(2);
        
        array.splice(elemento,1);
        localStorage.setItem("textos",array);
        console.log(array);
        ul.removeChild(item);
    })
    return deletebtn;
}
