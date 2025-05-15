function trocaVencimento() {
    const vencimentoAtual = parseInt(document.getElementById('vencimentoAtual').value)
    const vencimentoNovo = parseInt(document.getElementById('vencimentoNovo').value)
    const valorPlano = parseFloat(document.getElementById('valorPlano').value)
    const resultado = document.getElementById('resultado')

    let diariaPlano = valorPlano / 30

    let diasProporcionais = 0
    let proporcional = 0
    let valorTotal = 0

    if (vencimentoAtual < vencimentoNovo) {
        diasProporcionais = vencimentoNovo - vencimentoAtual
        proporcional = (diariaPlano * diasProporcionais)
        valorTotal = (proporcional + valorPlano)


    } else {
        diasProporcionais = (30 - vencimentoAtual) + vencimentoNovo
        proporcional = diariaPlano * diasProporcionais
        valorTotal = proporcional + valorPlano
    }

    resultado.style.borderRadius = "15px"
    resultado.style.padding = "15px"
    resultado.style.height = "170px"
    resultado.style.width = "350px"

    
    resultado.innerHTML = `
    <p><strong>Dias proporcionais</strong>:  ${diasProporcionais}  </p>
    <p><strong>Valor do proporcional</strong>: R$  ${(proporcional).toFixed(2).replace('.', ',')}  </p>
    <p><strong>Valor da fatura</strong>: R$  ${(valorTotal).toFixed(2).replace('.', ',')}  </p>
    `
}
