function trocaVencimento() {
    const vencimentoAtual = parseInt(document.getElementById('vencimentoAtual').value)
    const vencimentoNovo = parseInt(document.getElementById('vencimentoNovo').value)
    let valorPlano = parseFloat(document.getElementById('valorPlano').value)
    const msg1 = document.getElementById('msg1')
    const msg2 = document.getElementById('msg2')

    let diariaPlano = valorPlano / 30

    let diasProporcionais = 0
    let proporcional = 0
    let valorTotal = 0

    if (vencimentoAtual < vencimentoNovo) {
        diasProporcionais = vencimentoNovo - vencimentoAtual
        proporcional = (diariaPlano * diasProporcionais)

    } else {
        diasProporcionais = (30 - vencimentoAtual) + vencimentoNovo
        proporcional = diariaPlano * diasProporcionais

    }

    valorTotal = proporcional + valorPlano

    valorTotal = (valorTotal).toFixed(2).replace('.', ',')
    valorPlano = (valorPlano).toFixed(2).replace('.', ',')
    proporcional = (proporcional).toFixed(2).replace('.', ',')

    
    msg1.style.borderRadius = "15px"
    msg1.style.padding = "15px"
    msg1.style.height = "130px"
    msg1.style.width = "350px"
    msg1.innerHTML = `
        <p>Realizando a troca de vencimento do dia ${vencimentoAtual} para o dia ${vencimentoNovo}, o sistema irá calcular o *proporcional* de ${diasProporcionais} dias, e 
        isso dará o valor de R$${valorTotal} para data escolhida, e as próximas faturas voltam para o valor real do seu plano que é R$${valorPlano}. Posso seguir com a 
        alteração de vencimento?</p>
    `
    document.getElementById('copy1').style.display = 'block'     //faz aparecer o botao


    msg2.style.borderRadius = "15px"
    msg2.style.padding = "15px"
    msg2.style.height = "80px"
    msg2.style.width = "350px"
    msg2.innerHTML = `
        Cliente quis alterar o vencimento de ${vencimentoAtual} para ${vencimentoNovo}
        Proporcional de ${diasProporcionais} dias R$${proporcional}
        Mais o valor da fatura R$${valorPlano}
        Total de R$${valorTotal}
    `
    document.getElementById('copy2').style.display = 'block'

}

function copiar1() {
    navigator.clipboard.writeText(document.getElementById('msg1').innerText)
}

function copiar2() {
    navigator.clipboard.writeText(document.getElementById('msg2').innerText)

}
