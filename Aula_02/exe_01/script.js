function cumprimentar(){
    const nomeDigitado = document.getElementById('nome').value
    const frase = `Olá,${nomeDigitado}! Bem Vindo ao nosso programa.`
    const paragrafo = document.getElementById('resposta')
    paragrafo.innerHTML = frase
}






