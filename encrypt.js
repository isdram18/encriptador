let textoToCrypt = document.getElementById('textoUsuario').value;
let textoSinAcentos = eliminarAcentos(textoToCrypt);
let textoEncryptado = encriptarTexto(textoSinAcentos);
let textoDesencriptado = desencriptarTexto(textoSinAcentos);



function eliminarAcentos(textoToCrypt) {
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
    };
    return textoToCrypt.split('').map(letra => acentos[letra] || letra).join('');
}


function encriptarTexto(textoSinAcentos) {
    let textoEncryptado = textoSinAcentos
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncryptado;
    
}

function desencriptarTexto(textoSinAcentos) {
    let textoDesencriptado = textoSinAcentos
        .replace(/ai/g, "a")    
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

console.log(textoUsuario);
console.log(textoToCrypt);
console.log(textoSinAcentos);
//console.log(textoEncriptado);
console.log(textoEncryptado);

console.log(textoDesencriptado);