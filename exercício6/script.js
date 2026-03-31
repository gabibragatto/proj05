let peso = (prompt("Qual o seu peso"))
let altura = (prompt("qual a sua altura (em metros, ex 1.70)"))
let IMC = peso / (altura ** 2)

if (IMC < 18.5 ) {
    alert (`Você esta abaixo do peso, o seu IMC foi ${IMC.toFixed(2)}`)
} if (IMC <= 24.9) {
    alert (`Você esta no peso normal, seu IMC foi ${IMC.toFixed(2)}`)
} if (IMC <= 29.9) {
    alert(`Você esta sobrepeso, seu IMC foi ${IMC.toFixed(2)}`)
} else {
    alert(`Você esta obeso, seu IMC foi ${IMC.toFixed(2)}`)
}