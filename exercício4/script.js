let valor = prompt("Digite o valor da compra:");
let desconto = valor * 0.10;
let total = valor - desconto;

if (valor >= 100){
    alert(`Você ganhou 10% de desconto . Sua compra ficou ${total}`)
} else {
    alert("Você não ganhou desconto")
}