function trocaVencimento() {
    const vencimentoAtual = parseInt(document.getElementById('vencimentoAtual').value)
    const vencimentoNovo = parseInt(document.getElementById('vencimentoNovo').value)
    const valorPlano = parseFloat(document.getElementById('valorPlano').value)
    const diasMes = 30

    console.log(vencimentoAtual)

    if (vencimentoAtual > vencimentoNovo) {
        let diasProporcionais = vencimentoNovo - vencimentoAtual
    } else {
        let diasProporcionais = (30 - vencimentoAtual) + vencimentoNovo
    }

    let diariaPlano = valorPlano / 30
    let proporcional = diariaPlano * diasProporcionais
    let valorTotal = proporcional + valorPlano

    alert(valorTotal)

}