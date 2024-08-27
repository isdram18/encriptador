const textoCapturado =document.querySelector(".texto_a_transformar");
const textoTransformado = document.querySelector(".texto_transformado");

const valoresEncriptar = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

const valoresDesesncriptar = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
};

function eliminarAcentos(texto) {
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
    };
    return texto.split('').map(letra => acentos[letra] || letra).join('');
}

function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

document.getElementById('copyButton').addEventListener('click', 
    function() {
    var textToCopy = document.getElementById('textToCopy');
    textToCopy.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
});




///////v2

let textoRecibido = ""; //document.getElementById('textoUsuario').value;
let textoLimpio = eliminarAcentos(textoRecibido);
let textoToCrypt = encriptarTexto(textoLimpio);
let textoEncryptado = encriptarTexto(textoLimpio);
let textoDesencriptado = desencriptarTexto(textoEncryptado);



function eliminarAcentos(textoRecibido) {
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
    };
    return textoLimpio.split('').map(letra => acentos[letra] || letra).join('');
}


function encriptarTexto(textoToCrypt) {
        let textoEncryptado = textoToCrypt
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncryptado;
    }
        
   
    
    


function desencriptarTexto(textoEncryptado) {
    textoRecibido = document.getElementById('textoUsuario').value;
    if(textoRecibido != null){
    let textoDesencriptado = textoEncryptado
        .replace(/ai/g, "a")    
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
    }else{
        alert('Esta vacio escribe algo!!!');
    }
}


console.log(textoRecibido);
console.log(textoLimpio);
console.log(textoToCrypt);
//console.log(textoEncriptado);
console.log(textoEncryptado);
console.log(textoDesencriptado);