let resposta = document.getElementById('resposta')

function calcular(){
   let graus =  Number(document.getElementById('graus').value)
   
   let fahrenheit = (graus * 1.8 ) + 32
   
resposta.innerHTML = ("resultado:" + graus + "="+ fahrenheit)
}