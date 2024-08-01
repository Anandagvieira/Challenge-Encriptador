const criptBtn = document.getElementById('criptBtn');
const decripBtn = document.getElementById('decripBtn');
let mensagem = document.getElementById('mensagem');
const copyBtn = document.getElementById('copyBtn');

// // As "chaves" de criptografia que utilizaremos são:
// // A letra "e" é convertida para "enter"
// // A letra "i" é convertida para "imes"
// // A letra "a" é convertida para "ai"
// // A letra "o" é convertida para "ober"
// // A letra "u" é convertida para "ufat"

// Botão que criptografa as mesagens
criptBtn.addEventListener('click',() => {
var mensagemCriptografada = mensagem.value;

  if (mensagemCriptografada.includes("e")) {
    mensagemCriptografada = mensagemCriptografada.replace(/e/g,"enter");
  } 
  if (mensagemCriptografada.includes("i")) {
    mensagemCriptografada = mensagemCriptografada.replace(/i/g,"imes");
  } 
  if (mensagemCriptografada.includes("a")) {
    mensagemCriptografada = mensagemCriptografada.replace(/a/g,"ai");
  } 
    
  if (mensagemCriptografada.includes("o")) {
    mensagemCriptografada = mensagemCriptografada.replace(/o/g,"ober");
  } 
  if (mensagemCriptografada.includes("u")) {
    mensagemCriptografada = mensagemCriptografada.replace(/u/g,"ufat");
  }     

  document.getElementById('area-output').innerHTML = "<textarea id='output'></textarea><button id='copyBtn' onclick='copiar()'>Copiar</button>";
  document.getElementById('output').innerHTML = mensagemCriptografada;
});
    
    
 // Botão que descriptografa as mensagens
 decripBtn.addEventListener('click',() => {
  var mensagemDescriptografada = mensagem.value

  if (mensagemDescriptografada.includes("enter")) {
    mensagemDescriptografada = mensagemDescriptografada.replaceAll(/enter/g,"e");
  }
  if (mensagemDescriptografada.includes("imes")) {
    mensagemDescriptografada = mensagemDescriptografada.replaceAll(/imes/g,"i");
  } 
  if (mensagemDescriptografada.includes("ai")) {
  	mensagemDescriptografada = mensagemDescriptografada.replaceAll(/ai/g,"a");
  } 
  if (mensagemDescriptografada.includes("ober")) {
    mensagemDescriptografada = mensagemDescriptografada.replaceAll(/ober/g,"o");
  } 
  if (mensagemDescriptografada.includes("ufat")) {
    mensagemDescriptografada = mensagemDescriptografada.replaceAll(/ufat/g,"u");
  }
  document.getElementById('output').innerHTML = mensagemDescriptografada;
  mensagemDescriptografada = ("");
});

  //copyBtn.addEventListener('click',() => {
    
 function copiar() {
  var copia = document.getElementById('output');

  // Select the text field
  copia.select();
  copia.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copia.value);

  // Delete the text inside the text field
  document.getElementById('output').innerHTML = ("");
  mensagem.value = ("");
  
 }