// Selecciona los elementos necesarios
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

function encrypt(text) {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      encryptedText += String.fromCharCode(charCode + 3);
    }
    return encryptedText;
  }
  
  function decrypt(encryptedText) {
    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
      let charCode = encryptedText.charCodeAt(i);
      decryptedText += String.fromCharCode(charCode - 3);
    }
    return decryptedText;
  }

// Función para procesar el texto ingresado
function processText() {
    const text = inputText.value;
    const encryptedText = encrypt(text);
    const decryptedText = decrypt(encryptedText);
    outputText.textContent = decryptedText; // Mostrar el texto desencriptado en la salida
}

// Evento que se dispara cuando se ingresa texto
inputText.addEventListener('input', processText);

// Evento para encriptar el texto
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    const encryptedText = encrypt(text);
    outputText.textContent = encryptedText;
});

// Evento para desencriptar el texto
decryptBtn.addEventListener('click', () => {
    const encryptedText = outputText.textContent;
    const decryptedText = decrypt(encryptedText);
    outputText.textContent = decryptedText;
});

// Evento para copiar el texto encriptado/desencriptado
copyBtn.addEventListener('click', () => {
    const text = outputText.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

// Procesar el texto al cargar la página
window.addEventListener('load', processText);