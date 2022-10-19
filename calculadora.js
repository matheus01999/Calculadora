//Operações

let resultado = document.getElementById('resultado').innerHTML;

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


// Calculando


function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        operacao = resultado + " = " + eval(resultado)
        var html = "<tr'>";
	    html += "<td>" + resultado + " = " +eval(resultado) + "</td>";
        html += "<hr/>"
	    html += "</tr>";
        document.getElementById("registros").innerHTML += html; 
        clean()
        

    }
    else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }

}


//Listando  Resultados 

