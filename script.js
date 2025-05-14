function trocaVencimento() {
    const vencimentoAtual = parseInt(document.getElementById('vencimentoAtual').value)
    const vencimentoNovo = parseInt(document.getElementById('vencimentoNovo').value)
    const valorPlano = parseFloat(document.getElementById('valorPlano').value)
    const resultado = document.getElementById('resultado')

    let diariaPlano = valorPlano / 30

    if (vencimentoAtual < vencimentoNovo) {
        let diasProporcionais = vencimentoNovo - vencimentoAtual
        let proporcional = diariaPlano * diasProporcionais
        let valorTotal = proporcional + valorPlano

        resultado.innerHTML = `
        <p><strong>Dias proporcionais</strong>: ${diasProporcionais}</p>
        <p><strong>Valor do proporcional</strong>: ${proporcional}</p>
        <p><strong>Valor da fatura</strong>: ${valorTotal}</p>
        `

    } else {
        let diasProporcionais = (30 - vencimentoAtual) + vencimentoNovo
        let proporcional = diariaPlano * diasProporcionais
        let valorTotal = proporcional + valorPlano

        resultado.innerHTML = `
        <p><strong>Dias proporcionais</strong>: ${diasProporcionais}</p>
        <p><strong>Valor do proporcional</strong>: ${proporcional}</p>
        <p><strong>Valor da fatura</strong>: ${valorTotal}</p>
        `
    }
}
