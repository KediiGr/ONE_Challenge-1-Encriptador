/* let textoCapt = null;

function capturaTexto() {
  let textArea = document.getElementById("textarea");
  textoCapt = textArea.value;
  //return;
} */

/* // Declarar una variable global para almacenar el texto
let textoCapturado = "";

// Función para capturar el contenido del textarea
function capturarTexto() {
    const textarea = document.querySelector("textarea"); // Cambia ".textarea" por el selector correcto de tu textarea
    textoCapturado = textarea.value;
}

// Evento al presionar el botón "Encriptar"
document.querySelector(".btn_enc").addEventListener("click", function() {
    capturarTexto();
    // Aquí puedes agregar la lógica para encriptar el texto
    console.log("Texto encriptado:", textoCapturado);
});

// Evento al presionar el botón "Desencriptar"
document.querySelector(".btn_desc").addEventListener("click", function() {
    capturarTexto();
    // Aquí puedes agregar la lógica para desencriptar el texto
    console.log("Texto desencriptado:", textoCapturado);
});
 */
// Declarar una variable global para almacenar el texto
let textoCapturado = "";

// Función para capturar el contenido del textarea
function capturarTexto() {
    const textarea = document.querySelector("textarea"); // Cambia ".textarea" por el selector correcto de tu textarea
    textoCapturado = textarea.value;
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    const mapping = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = "";
    for (let char of texto) {
        if (char in mapping) {
            textoEncriptado += mapping[char];
        } else {
            textoEncriptado += char;
        }
    }
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(textoEncriptado) {
    const reverseMapping = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let palabras = textoEncriptado.split(/(\s+)/); // Divide por espacios y conserva los espacios
    let textoDesencriptado = "";
    for (let i = 0; i < palabras.length; i += 2) {
        const palabra = palabras[i];
        if (palabra in reverseMapping) {
            textoDesencriptado += reverseMapping[palabra];
        } else {
            textoDesencriptado += palabra;
        }
    }
    return textoDesencriptado;
}

// Evento al presionar el botón "Encriptar"
document.querySelector(".btn_enc").addEventListener("click", function() {
    capturarTexto();
    const textoEncriptado = encriptarTexto(textoCapturado);
    console.log("Texto encriptado:", textoEncriptado);
});

// Evento al presionar el botón "Desencriptar"
document.querySelector(".btn_desc").addEventListener("click", function() {
    capturarTexto();
    const textoDesencriptado = desencriptarTexto(textoCapturado);
    console.log("Texto desencriptado:", textoDesencriptado);
});
