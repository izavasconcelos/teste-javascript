function solucao1(frase) {
    let resposta = "";
    
    resposta = frase.charAt(0); //Peguei a primeira letra
    for(let i = 0; i < frase.length; i++){ //Laço para pegar as próximas iniciais
        if(frase.charAt(i)== " "){
            resposta+=frase.charAt(i+1);
        }
    }
    
    return resposta;
}

function solucao2(horario, minutosAcrescimo) {
    
    var hr = parseInt(horario.charAt(0)+horario.charAt(1));
    var min = parseInt(horario.charAt(3)+horario.charAt(4));
    var aux = min + minutosAcrescimo;
    if(aux > 60){
        do{
            hr++;
            aux-=60;
            if(hr==24) hr = 0;
        }while(aux > 60)
    }
    hr = (hr < 10 ) ? "0"+hr : hr;
    aux = (aux < 10) ? "0"+aux : aux;
    var resultado = "" + hr + ":" + aux;
    return resultado;
}

function solucao3(palavra) {
    let resultado = 0;
    let tam = palavra.length-1;
    
    let aux = (tam % 2 == 0) ? tam/2 : Math.round(tam/2);
    
    for(let i = 0; i < aux; i++){
        if(palavra.charAt(i) == palavra.charAt(tam-i)) resultado++;
        else i = aux;
    }
    resultado = ( resultado == 0) ? -1 : resultado;
    return resultado;
}

function solucao4(investimentoMensal, precoAcao, dividendos, duracao)
{
	let resultado = 0;
	let investimento, div, acao = 0, preco;

	for( let i = 0; i < duracao; i++){
  	investimento = investimentoMensal/(precoAcao+i) * 12;
  	div = investimento * (dividendos+(i*0.005));
  	acao += investimento + div/(precoAcao+i);
  	preco = precoAcao + i;
	}
	resultado = acao * (preco);
	return resultado;
}

function solucao5(tensao, resistores) {
    let resposta = [];
    let divisor = 0, dividendo = 0;
    for(let i = 0; i < resistores.length; i++){
        divisor+=resistores[i];
    }
    
    
    for(let i = 0; i < resistores.length-1; i++){
        for(let j = i+1; j < resistores.length; j++){
            dividendo+=resistores[j];
        }
        resposta[i] = tensao * (dividendo/divisor);
        dividendo = 0;
    }
    
    return resposta;
}
