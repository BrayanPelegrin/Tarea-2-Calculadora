const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonNumeros = document.querySelectorAll(".Numero");
const botonOperadores = document.querySelectorAll(".operador");

const pantalla = new Pantalla(displayValorAnterior, displayValorActual);

botonNumeros.forEach((boton) => {
  boton.addEventListener("click", () =>
    pantalla.agregarNumero(boton.innerHTML)
  );
});

botonOperadores.forEach((boton) => {
  boton.addEventListener("click", () => pantalla.computar(boton.value));
});
