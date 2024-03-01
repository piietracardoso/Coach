//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");


for (var i=0; i < clientes.length; i++) {

    //Captura a quantidade encomendada
    var qtde = clientes[i].querySelector(".info-qtde").textContent;

    //Captura o valor untário do produto
    var unitario = clientes[i].querySelector(".info-valor").textContent;

    //Verifica se a quantidade é um número válido
    if(qtde < 1 || isNaN(qtde)){
        clientes[i].querySelector(".info-qtde").textContent = "Qtde inválida";
        clientes[i].querySelector(".info-qtde").style.color="red";
    } if (unitario < 1 ) {
        clientes[i].style.backgroundColor = "red";
        
    }else {
        
        //A quantidade está certa, pode prosseguir
        //Exibe o valor total da encomenda 
        clientes[i].querySelector(".info-total").textContent = calculaTotal(qtde,unitario);
    }
}

function calculaTotal (qtde,unitario) {
    var total = 0;
    total = qtde * unitario;
    return total;
}

