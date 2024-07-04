let textoCapturado = "";

// Función para capturar el contenido del textarea
function capturarTexto() {
    const textarea = document.querySelector("textarea");
    textoCapturado = textarea.value;
    return textoCapturado;
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
function desencriptarTexto(texto) {
    const reverseMapping = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = texto;
    for (const [key, value] of Object.entries(reverseMapping)) {
        const regex = new RegExp(key, "g");
        textoDesencriptado = textoDesencriptado.replace(regex, value);
    }
    return textoDesencriptado;
}

function mostrarResultado(resultado) {
    const resultadoTextarea = document.querySelector(".resultado_texto");
    if (resultadoTextarea) {
        resultadoTextarea.value = resultado;
    }
}

// Presionar botón "Encriptar"
document.querySelector(".btn_enc").addEventListener("click", function() {
    const resultadoTextarea = document.getElementById("textarea");
    const texto = resultadoTextarea.value.trim();

    if (texto === "") {
        mostrarNotificacion("¡Ingrese el texto que desea procesar!","#640303");
    } else {
        const textoEncriptado = encriptarTexto(texto);
        mostrarResultado(textoEncriptado);
        mostrarNotificacion("¡Texto Encriptado!", "#4caf50");
    }
});

// Presionar botón "Desencriptar"
document.querySelector(".btn_desc").addEventListener("click", function() {
    const resultadoTextarea = document.getElementById("textarea");
    const texto = resultadoTextarea.value.trim();

    if (texto === "") {
        mostrarNotificacion("¡Ingrese el texto que desea procesar!","#640303");
    } else{
        const textoDesencriptado = desencriptarTexto(texto);
        mostrarResultado(textoDesencriptado);
        mostrarNotificacion("¡Texto Desencriptado!", "#4caf50");
    }
});

// Presionar botón "Copiar"
document.querySelector(".btn_copy").addEventListener("click", function() {
    const resultadoTextarea = document.querySelector(".resultado_texto");
    if (resultadoTextarea.value.trim() !== "") {
        resultadoTextarea.select();
        document.execCommand('copy');
        mostrarNotificacion("¡Texto Copiado!", "#4caf50");
    } else {
        mostrarNotificacion("¡Nada que copiar!", "#640303");
    }
});

// mostrar notificación
function mostrarNotificacion(mensaje, color) {
    const notification = document.getElementById("Notification");
    notification.textContent = mensaje;
    notification.style.backgroundColor = color; 
    if (!notification.classList.contains("show")) {
        notification.classList.add("show");
        setTimeout(() => {
            notification.classList.remove("show");
        }, 2500); // milisegundos para que se oculte la notificación
    }
}

// Restricciones del textarea principal
const textareaPrincipal = document.getElementById("textarea");
const textareaResultado = document.querySelector(".resultado_texto");

textareaPrincipal.addEventListener("input", function() {
    const texto = textareaPrincipal.value;
    const textoFiltrado = texto.replace(/[^a-z\s]/g, "");

    if (texto !== textoFiltrado) {
        textareaPrincipal.value = textoFiltrado;
    }

    if (texto.trim() === "") {
        textareaResultado.value = "";
    }
});

