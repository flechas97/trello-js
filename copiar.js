if(document.getElementById("copiarcont10")){
    document.getElementById("copiarcont10").onclick =function (){
        copyToClipBoard("textcont10");

    }
}

if(document.getElementById("copiarcont11")){
    document.getElementById("copiarcont11").onclick =function (){
        copyToClipBoard("textcont11");
    }
}

if(document.getElementById("copiarcont12")){
    document.getElementById("copiarcont12").onclick =function (){
        copyToClipBoard("textcont12");
    }
}

if(document.getElementById("copiarcont13")){
    document.getElementById("copiarcont13").onclick =function (){
        copyToClipBoard("textcont13");
    }
}

if(document.getElementById("copiarcont14")){
    document.getElementById("copiarcont14").onclick =function (){
        copyToClipBoard("textcont14");
    }
}

if(document.getElementById("copiarcont15")){
    document.getElementById("copiarcont15").onclick =function (){
        copyToClipBoard("textcont15");
    }
}

if(document.getElementById("copiarcont16")){
    document.getElementById("copiarcont16").onclick =function (){
        copyToClipBoard("textcont16");
    }
}

if(document.getElementById("copiarcont17")){
    document.getElementById("copiarcont17").onclick =function (){
        copyToClipBoard("textcont17");
    }
}

if(document.getElementById("copiarcont18")){
    document.getElementById("copiarcont18").onclick =function (){
        copyToClipBoard("textcont18");
    }
}

if(document.getElementById("copiarcont19")){
    document.getElementById("copiarcont19").onclick =function (){
        copyToClipBoard("textcont19");
    }
}

//----------------------------zona 2 --------------------------------
if(document.getElementById("copiarcont20")){
    document.getElementById("copiarcont20").onclick =function (){
        copyToClipBoard("textcont20");

    }
}

if(document.getElementById("copiarcont21")){
    document.getElementById("copiarcont21").onclick =function (){
        copyToClipBoard("textcont21");
    }
}

if(document.getElementById("copiarcont22")){
    document.getElementById("copiarcont22").onclick =function (){
        copyToClipBoard("textcont22");
    }
}

if(document.getElementById("copiarcont23")){
    document.getElementById("copiarcont23").onclick =function (){
        copyToClipBoard("textcont23");
    }
}

if(document.getElementById("copiarcont24")){
    document.getElementById("copiarcont24").onclick =function (){
        copyToClipBoard("textcont24");
    }
}

if(document.getElementById("copiarcont25")){
    document.getElementById("copiarcont25").onclick =function (){
        copyToClipBoard("textcont25");
    }
}

if(document.getElementById("copiarcont26")){
    document.getElementById("copiarcont26").onclick =function (){
        copyToClipBoard("textcont26");
    }
}

if(document.getElementById("copiarcont27")){
    document.getElementById("copiarcont27").onclick =function (){
        copyToClipBoard("textcont27");
    }
}

if(document.getElementById("copiarcont28")){
    document.getElementById("copiarcont28").onclick =function (){
        copyToClipBoard("textcont28");
    }
}

if(document.getElementById("copiarcont29")){
    document.getElementById("copiarcont29").onclick =function (){
        copyToClipBoard("textcont29");
    }
}


function copyToClipBoard(id) {
    var content = document.getElementById(id);
    content.select();
    document.execCommand('copy');
    alert("Texto copiado: "+content.value);
}