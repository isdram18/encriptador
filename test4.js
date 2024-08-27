let textoRecibido = "Hola"; //document.getElementById('textoUsuario').value;
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
    
    let textoDesencriptado = textoEncryptado
        .replace(/ai/g, "a")    
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
    }


console.log(textoRecibido);
console.log(textoLimpio);
console.log(textoToCrypt);
//console.log(textoEncriptado);
console.log(textoEncryptado);
console.log(textoDesencriptado);


//////////////////////////////si funciona
///funcion para convertir en minusculas


// Función para eliminar acentos
function eliminarAcentos(texto) {
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
    };
    return texto.split('').map(letra => acentos[letra] || letra).join('');
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para procesar el texto del textarea
function procesarTexto() {
    // Captura el valor del textarea
    let texto = document.getElementById('miTextarea').value;
   
    // Elimina los acentos
    let textoSinAcentos = eliminarAcentos(texto);
    
    // Encripta el texto
    let textoEncriptado = encriptarTexto(textoSinAcentos);

    
    // Muestra el resultado de la encriptacion
    document.getElementById('mensaje').innerText = textoEncriptado;

}



////version final final de funciones
// Función para eliminar acentos
function eliminarAcentos(texto) {
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
    };
    return texto.split('').map(letra => acentos[letra] || letra).join('');
}

// Función para encriptar el texto
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


// Función para encriptar
function encriptaElTexto() {
    // Captura el valor del textarea
    let texto = document.getElementById('miTextarea').value;
   
    // Elimina los acentos
    let textoSinAcentos = eliminarAcentos(texto);
    
    // Encripta el texto
    let textoEncriptado = encriptarTexto(textoSinAcentos);

    
    // Muestra el resultado de la encriptacion
    document.getElementById('mensaje').innerText = textoEncriptado;

    //Limpiar textArea
    document.getElementById('miTextarea').value = "";

    //ocultar imagen
    mensaje.style.backgroundImage = 'none';

}


//Funcion para desencriptar

// Función para procesar el texto del textarea
function desencriptarElTexto() {
    // Captura el valor del textarea
    let texto = document.getElementById('miTextarea').value;
   
    // Elimina los acentos
    let textoSinAcentos = eliminarAcentos(texto);
    
    // Encripta el texto
    let textoDesencriptado = desencriptarTexto(textoSinAcentos);

    
    // Muestra el resultado de la encriptacion
    document.getElementById('mensaje').innerText = textoDesencriptado;

    //Limpiar textArea
    document.getElementById('miTextarea').value = "";

    //ocultar imagen
    mensaje.style.backgroundImage = 'none';

}

//funcion para copiar contenido
function copiarTexto() {
    // Captura el elemento textarea
    let mensaje = document.getElementById('mensaje');
    
    // Copia el texto al portapapeles
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            // Muestra una alerta de confirmación
            alert("Texto copiado al portapapeles: " + mensaje.value);
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
        document.getElementById('mensaje').value = "";
        mensaje.style.backgroundImage = 'url("/assets/mono-diamante.png")';

}



////version v3
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

:root{
    --db100:#609ED4;
    --db200:#356EA9;
    --db300:#0A3871;
    --db400:#072B61;
    --db500:#052051;

    --lb100:#F3F5FC;
    --lb200:#EFF1FA;
    --lb300:#E9ECF8;
    --lb400:#AAB2D5;
    --lb500:#757FB2;

    --gc100:#CED4DA;
    --gc200:#ADB5BD;
    --gc300:#868E96;
    --gc400:#495057;
    --gc500:#343A40;
    
    --fuente-in:"Inter",sans-serif;

}

* {
    padding: 10;
    margin: 10;
    background-color: #F3F5FC;
}

.logo{
    padding-top: 10px;
    margin-left: 10px;
    width: 10%;
}
main{
    display:flex;
    margin-bottom: 50px;
    margin-left: 180px;

}

.texto_a_transformar{
    border:none;
    color: var(--db300);
    margin-top: 90px;
    text-transform: lowercase;
}


::placeholder{
    color: var(--db300);
} 
.texto_a_transformar:focus{
    outline: none;
}

.texto_transformado{
    background: white;
    background-image: url("/assets/mono-diamante.png");
    background-repeat: no-repeat;
    border: none;
    border-radius: 24px;
    color: var(--db300);
    margin-left: 100px;
    margin-top: 20px;
    padding-left: 30px;
    position: fixed;
    padding-right: 100px;
    text-transform: lowercase;

}
.texto_a_transformar:focus{
    outline: none;
}
body{
    font-family: var(--fuente-in);
    font-weight: 400;
    line-height: 150%;
    font-size: 32px;
}

.botones{
    display: flex;
    margin-top: 18px;

}
.btne{
    width: 328px;
    height: 67px;
    text-align: center;
    padding: 24px;
    border-radius: 24px;
    font-family: var(--fuente-in);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    background-color: var(--db300);
    color:white;
    border:1px solid var(--db300);
    justify-content: center;
    cursor: pointer;
    
}

.btne:hover{
    
    text-align: center;
    padding:24px;
    border-radius: 24px;
    font-family: var(--fuente-in);
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--db400);
    color: #ffffff;
    justify-content: center;
    
}

.btnd{
    width: 328px;
    height: 67px;
    text-align: center;
    padding: 24px;
    border-radius: 24px;
    font-family: var(--fuente-in);
    font-size: 1rem;
    font-weight: 600;
    background-color: #d8dfe8;
    border: 1px solid var(--db300);
    justify-content: center;
    cursor:pointer;
    color: var(--db300);
    margin-left: 30px;

}

.btnd:hover{
   
    text-align: center;
    padding: 24px;
    border-radius: 24px;
    font-family: var(--fuente-in);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    background-color: var(--lb200);
    border: 2px solid var(--db300);
    display: flex;
    justify-content: center;
    
    color: var(--db300);;
}
.btnc{
   
    width: 328px;
    height: 67px;
    text-align: center;
    padding: 24px;
    border-radius: 24px;
    font-family: var(--fuente-in);
    font-size: 1rem;
    font-weight: 600;
    background-color: #d8dfe8;
    border: 1px solid var(--db300);
    justify-content: center;
    cursor:pointer;
    color: var(--db300);
    align-self: flex-start;
    
}
.btnc:hover{
   
    text-align: center;
    padding: 24px;
    border-radius: 24px;
    font-family: var(--fuente-in);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    background-color: var(--lb200);
    border: 2px solid var(--db300);
    display: flex;
    justify-content: center;
    
    color: var(--db300);;
}

footer{
    color: var(--db300);
    padding: 2rem;
    text-align: center;
    margin: 0;
}


@media (max-width: 1200px){}
@media (max-width: 767px){}
@media (max-width: 360px) {}