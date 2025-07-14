let libros = [];

const formulario = document.getElementById("formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("lista");

const mostrarLista = () => {
  lista.innerHTML = libros
    .map(
      (item, index) => `<div class="tarjeta">${item}<button onclick="eliminarLibro(${index})">x</button></div>`).join("");
};

const eliminarLibro = (index) => {
  libros.splice(index, 1);
  mostrarLista();
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const texto = input.value.trim(); 
  if (texto === "") return; 

  libros.push(texto); 
  input.value = ""; 
  mostrarLista(); 
});