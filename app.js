const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const btnNumeros = document.querySelectorAll(".numero");
const btnOperador = document.querySelectorAll(".operador");
const display = new Display(displayValorAnterior, displayValorActual)
const calculadora = new Calculadora();


btnNumeros.forEach(boton => boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML)))
btnOperador.forEach(boton => boton.addEventListener("click", () => display.computar(boton.value)))
