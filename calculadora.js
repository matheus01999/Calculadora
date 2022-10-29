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
    MostrarResultados()
    var calculo = document.getElementById('calculo').innerHTML;
    if(calculo){
        document.getElementById('calculo').innerHTML = eval(calculo);
        var html = "<tr>";
	    html += "<td>" + calculo + " = " +eval(calculo) + "</td>";
        html += "<hr>";
	    html += "</tr>";
        document.getElementById("registros").innerHTML += html;
        clean()
        
        

    }
    else{
        document.getElementById('calculo').innerHTML = "Nada..."
    }

}


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

  }


function MostrarResultados(){
    var validadorResultados = document.getElementById('registros')
      if(validadorResultados){
        
    }
    else{
    var listaResultados = "<h1 id=titulo>Resultados</h1>"
    listaResultados += "<div class=historicoResultados>"
    listaResultados += "<table id=registros>"
    listaResultados += "<tr>"
    listaResultados += "<td></td>"
    listaResultados += "</tr>"
    listaResultados += "</table>"
    listaResultados += "</div>"
    document.getElementById('resultados').innerHTML += listaResultados
        
    }

    
    
}

