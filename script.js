function trocaVencimento() {
    const vencimentoAtual = parseInt(document.getElementById('vencimentoAtual').value)
    const vencimentoNovo = parseInt(document.getElementById('vencimentoNovo').value)
    const valorPlano = parseFloat(document.getElementById('valorPlano').value)
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

    // resultado.style.borderRadius = "15px"
    // resultado.style.padding = "15px"
    // resultado.style.height = "170px"
    // resultado.style.width = "350px"

    
    // resultado.innerHTML = `
    // <p><strong>Dias proporcionais:</strong>  ${diasProporcionais}  </p>
    // <p><strong>Valor do proporcional:</strong> R$  ${(proporcional).toFixed(2).replace('.', ',')}  </p>
    // <p><strong>Valor da fatura:</strong> R$  ${(valorTotal).toFixed(2).replace('.', ',')}  </p>
    // `

    msg1.style.borderRadius = "15px"
    msg1.style.padding = "15px"
    msg1.style.height = "200px"
    msg1.style.width = "350px"
    msg1.innerHTML = `
        <p>Realizando a troca de vencimento do dia ${vencimentoAtual} para o dia ${vencimentoNovo}, o sistema irá calcular o *proporcional* de ${diasProporcionais}dias, e isso dará o valor de ${valorTotal} para data escolhida, e as próximas faturas voltam para o valor real do seu plano que é ${valorPlano}. Posso seguir com a alteração de vencimento?</p>
    `
    document.getElementById('copy1').style.display = 'block'     //faz aparecer o botao


    msg2.style.borderRadius = "15px"
    msg2.style.padding = "15px"
    msg2.style.height = "100px"
    msg2.style.width = "350px"
    msg2.innerHTML = `
        Cliente quis alterar o vencimento de ${vencimentoAtual} para ${vencimentoNovo}
        Proporcional de ${diasProporcionais} dias R$${proporcional}
        Mais o valor da fatura R$${valorPlano}
        Total de R$${valorTotal}
    `
    document.getElementById('copy2').style.display = 'block'


}
