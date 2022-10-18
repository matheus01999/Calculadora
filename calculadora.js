var historico = []

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado)
    {
        adiciona()
        document.getElementById('resultado').innerHTML = eval(resultado);

        

    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

function adiciona(){
    var resultado = document.getElementById('resultado').innerHTML;
    var solucao = resultado + " = " + eval(resultado)
    historico.push(solucao)
    listar()


}

function listar(){
    for (var i = 0; i < historico.length; i++){
        document.getElementById('resutadoperacao').innerHTML = historico[i]
    }
    
}

