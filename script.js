function trocaVencimento() {
    const vencimentoAtual = parseInt(document.getElementById('vencimentoAtual').value)
    const vencimentoNovo = parseInt(document.getElementById('vencimentoNovo').value)
    const valorPlano = parseFloat(document.getElementById('valorPlano').value)
    const resultado = document.getElementById('resultado')

    let diariaPlano = valorPlano / 30

    if (vencimentoAtual < vencimentoNovo) {
        let diasProporcionais = vencimentoNovo - vencimentoAtual
        let proporcional = (diariaPlano * diasProporcionais)
        let valorTotal = (proporcional + valorPlano)

        resultado.style.borderRadius = "15px"
        resultado.style.padding = "15px"
        resultado.style.height = "170px"
        resultado.style.width = "350px"

        resultado.innerHTML = `
        <p><strong>Dias proporcionais</strong>: R$  ${diasProporcionais}  </p>
        <p><strong>Valor do proporcional</strong>: R$  ${(proporcional).toFixed(2).replace('.', ',')}  </p>
        <p><strong>Valor da fatura</strong>: R$  ${(valorTotal).toFixed(2).replace('.', ',')}  </p>
        `

    } else {
        let diasProporcionais = (30 - vencimentoAtual) + vencimentoNovo
        let proporcional = diariaPlano * diasProporcionais
        let valorTotal = proporcional + valorPlano

        resultado.style.borderRadius = "15px"
        resultado.style.padding = "15px"
        resultado.style.height = "170px"
        resultado.style.width = "350px"

        resultado.innerHTML = `
        <p><strong>Dias proporcionais</strong>: R$  ${diasProporcionais}  </p>
        <p><strong>Valor do proporcional</strong>: R$  ${(proporcional).toFixed(2).replace('.', ',')}  </p>
        <p><strong>Valor da fatura</strong>: R$  ${(valorTotal).toFixed(2).replace('.', ',')}  </p>
        `
    }
}
