function somar(){
    const numero1= Number(document.getElementById('numero01').value)
    const numero02=Number(document.getElementById('numero02').value)
    const somar = numero1+numero02
    const resultado = `O resultado é ${somar}`
    const paragrafo = document.getElementById('resposta')
    paragrafo.innerHTML = resultado

}