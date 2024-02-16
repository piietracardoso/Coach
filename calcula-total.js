//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for (var count=0; count < clientes.length; count++){

    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtde").textContent;
    
    //Captura o alor unitário do produto
    var unitário = clientes[count].querySelector(".info-valor").textContent;

    //Calcula o valor total da encomenda 
    clientes[count].querySelector(".info-total").textContent = qtde * unitário;
}