
class Parquimetro {
    constructor(valor) {
        // Guarda o valor pago pelo usuário
        this._valor = valor;
    }

    calcularTempo() {
        // Define o tempo de estacionamento
        if (this._valor >= 3) {
            return 120;
        } else if (this._valor >= 2) {
            return 60;
        } else if (this._valor >= 1) {
            return 30;
        } else {
            return "Valor insuficiente";
        }
    }

    calcularTroco(tempo) {
        // Define o preço conforme o tempo concedido
        let preco;

        if (tempo === 120) {
            preco = 3;
        } else if (tempo === 60) {
            preco = 2;
        } else if (tempo === 30) {
            preco = 1;
        } else {
            return 0;
        }

        // Calcula o troco, arredondando para centavos
        return Math.round((this._valor - preco) * 100) / 100;
    }
}

// Guarda o temporizador para podermos cancelá-lo
let temporizador;

// Detecta o clique no botão Pagar
document.getElementById("pagar").addEventListener("click", function() {

    // Cancela a contagem anterior, caso o botão tenha sido clicado novamente
    clearTimeout(temporizador);

    // Lê o valor digitado
    let valorPago = parseFloat(document.getElementById("valor").value);

    // Seleciona o elemento que exibe a mensagem
    let mensagem = document.getElementById("mensagem");

    // Valida o valor informado
    if (isNaN(valorPago) || valorPago < 0) {
        mensagem.textContent = "Digite um valor válido.";
    } else {
        // Cria o objeto e calcula o tempo
        let parquimetro = new Parquimetro(valorPago);
        let tempo = parquimetro.calcularTempo();

        // Exibe a mensagem adequada
        if (tempo === "Valor insuficiente") {
            mensagem.textContent = tempo;
        } else {
            // Calcula o troco e formata o valor em reais
            let troco = parquimetro.calcularTroco(tempo);

            mensagem.textContent =
                "Tempo de estacionamento: " + tempo +
                " minutos. Troco: R$ " +
                troco.toFixed(2).replace(".", ",");
        }
    }

    // Começa uma nova contagem de 15 segundos
    temporizador = setTimeout(function() {
        mensagem.textContent = "";
    }, 15000);
});


