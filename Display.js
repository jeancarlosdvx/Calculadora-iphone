
class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorAnterior = "";
        this.valorActual = "";
        this.TipoOperacion = undefined;
        this.signos = {
            sumar: "+",
            restar: "-",
            divicion:"/",
            multiplicacion:"*"
        }

    }

    

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.mostrarValores()
    }

    borrarTodo(){
        this.valorAnterior= ""
        !this.TipoOperacion
        this.valorActual = "";
        this.mostrarValores()
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes("."))return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.mostrarValores();
    }

    computar(tipo){
        this.TipoOperacion !== "igual" && this.calcular();
        this.TipoOperacion = tipo
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual ="";
        this.mostrarValores()
    }

    mostrarValores(){
        this.displayValorActual.textContent = this.valorActual ;
        this.displayValorAnterior.textContent = this.valorAnterior ;

    }

    calcular(){
        const valorAnterior = parseFloat( this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorActual) || isNaN(valorAnterior))return
        this.valorActual = this.calculador[this.TipoOperacion](valorAnterior,valorActual)
    }

}