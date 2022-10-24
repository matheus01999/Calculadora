//Operações

let calculo = document.getElementById('calculo').innerHTML;

function insert(num){
    var numero = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = numero + num;
}

function clean(){
    document.getElementById('calculo').innerHTML = "";
}

function back(){
    var calculo = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = calculo.substring(0, calculo.length -1);
}


// Calculando


function calcular(){
    var calculo = document.getElementById('calculo').innerHTML;
    if(calculo){
        document.getElementById('calculo').innerHTML = eval(calculo);
        operacao = calculo + " = " + eval(calculo)
        var html = "<tr'>";
	    html += "<td>" + calculo + " = " +eval(calculo) + "</td>";
	    html += "</tr>";
        document.getElementById("registros").innerHTML += html; 
        clean()
        

    }
    else{
        document.getElementById('calculo').innerHTML = "Nada..."
    }

}


//Listando  Resultados 

