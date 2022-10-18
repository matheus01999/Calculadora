var Calculador = function(){
    this.calcular = function(){
        var resultado = document.getElementById('resultado').innerHTML
        if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);}

        else{
            document.getElementById('resultado').innerHTML = "Nada..."}
    }

    this.backspace = function(){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }

    this.clean = function(){
        document.getElementById('resultado').innerHTML = "";
    }

    this.insert = function(){
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }



    }

    


module.exports = Calculador;