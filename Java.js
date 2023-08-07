function verificarAcesso() {
    let NcartaoX = document.getElementById("Ncartao");
    let cardN = parseInt(NcartaoX.value);
    let resultMessage = document.getElementById("Ncartao");

    if (isNaN(cardN)) {
        resultado.innerText = "Por favor, digite um número válido de cartão.";
        resultado.style.color = "red";
    } else if (cardN >= 1000 && cardN <= 1999) {
        resultado.innerText = "Acesso total a todas as áreas restritas permitido.";
        resultado.style.color = "green";
    } else if (cardN >= 2000 && cardN <= 2999) {
        resultado.innerText = "Acesso limitado a algumas áreas restritas.";
        resultado.style.color = "orange";
    } else if (cardN > 3000) {
        resultado.innerText = "Acesso negado. Funcionários com número de cartão acima de 3000 não têm permissão para acessar áreas restritas.";
        resultado.style.color = "red";
    } else {
        resultMessage.innerText = "Acesso negado.";
        resultado.style.color = "red";
    }
}
