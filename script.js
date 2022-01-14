//calcular salario
// 1 funçao com dois parametros: salario fixo e valor das vendas
// 2 se vender menos que 1200 recebe 3% de comissao
// 3 se vender mais que 1200  recebe 8% de comissao
// 4 retornar soma de salario mais comissao


function calculateSalary(salario,vendas){
    let salarioFinal=0
    if(vendas<=1200){
        salarioFinal+= (salario + (0.03*vendas))
    }
    else{
        salarioFinal+=(salario+(0.08*vendas))
    }
    return salarioFinal
}


//Maquina de dinheiro
// 1 criar uma funçao que recebe um inteiro que represente o valor em reais do saque
// 2 a funçao deve receber o salario fixo e as vendas feitas pelo vendedor(usar calculateSalary)
// 3 subtrair o valor total do saque do valor do salario
// 4 usar notas de 200, 100, 50, 20, 10, 5, 2, 1 para pagar o valor total do saque
// 5 mostrar string com notas sacadas e saldo atual na conta 

function cashMachine(saque,salario,vendas){
    let saldo=calculateSalary(salario,vendas)
    let notas=[200,100,50,20,10,5,2,1]
    let result='Notas sacadas:'
    let nota=[]
    let sobra=0
    let i=0
    saldo-=saque

    do {
        sobra=saque%notas[i]
        nota.push((saque-sobra)/notas[i])
        saque=sobra
        i++

    }while(saque>0)
    
    if (nota[0]>0){
       result+=nota[0]+' notas de 200 '
    }

    if (nota[1]>0){
    result+=nota[1] +" notas de 100 "
    }
    if (nota[2]>0){
    result+=nota[2] +" notas de 50 "
    }

    if (nota[3]>0){
    result+=nota[3] +" notas de 20 "
    }

    if (nota[4]>0){
    result+=nota[4] +" notas de 10 "
    }

    if (nota[5]>0){
    result+=nota[5]+" notas de 5 "
    }

    if (nota[6]>0){
    result+=nota[6] +" notas de 2 "
    }
    
    if (nota[7]>0){
    result+=nota[7] +" notas de 1 "
    }

    result+=" Saldo Atual: "+saldo


    return result}



// Calculadora de estoque
// 1 Função que recebe quantidade atual em estoque, quantidade maxima em estoque e quantidaded minima em estoque de um produto
// 2 calcular quantidade média de produtos
// 3 se a quantidade autal for maior ou igual a media, retornar: "nao efetuar compra"
// 4 se nao retorne: "efetuar compra"

function calculateStock(atual, maxima,minima){
    let media=((maxima+minima)/2)
    let result=""
    if(atual>=media){
        result+="nao efetuar compra"
    }
    else{
        result+='efetuar compra'
    }
    return result
}


// calcular idade
// 1 Função que recebe o ano de nascimento e o atual.
// 2 retorna a idade em anos
// 3 retorna a idade em meses
// 4 retorna a idade em dias
// 5 retorna a idade em semanas

function calculateAge(nascimento,anoAtual){
    let anos=anoAtual-nascimento

    return [("Anos: "+anos),
            ("Meses: "+(anos*12)),
            ("Dias: "+(anos*365)),
            ("Semanas: "+(anos*52))]

}

// Diagonal
// 1 Função recebe uma matriz quadrada
// 2 retorna sua diagonal principal

function getDiagonal(matriz){
    
    let result=[]
    for (let i=0;i<matriz.length;i++){
        console.log(i)
        for (let j=0;j<matriz[i].length;j++){
            console.log(j)
            if((i)==(j)){
                result.push(matriz[i][j])
            }
        }
    }
    return result
}