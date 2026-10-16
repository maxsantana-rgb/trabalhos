class Parquimetro {
    constructor(valor) {
        // Guarda o valor pago pelo usuário
        this._valor = valor;
    }

    calcularTempo() {
        // Define o tempo de estacionamento baseado nas novas faixas de preço
        if (this._valor >= 3) {
            return 120; // 2 horas (Custa R$ 3,00)
        } else if (this._valor >= 1.75) {
            return 60;  // 1 hora (Custa R$ 1,75) -> Ajustado aqui!
        } else if (this._valor >= 1) {
            return 30;  // 30 minutos (Custa R$ 1,00)
        } else {
            return "Valor insuficiente";
        }
    }

    calcularTroco(tempo) {
        // Define o preço de referência conforme o tempo concedido
        let preco;

        if (tempo === 120) {
            preco = 3;
        } else if (tempo === 60) {
            preco = 1.75; // Preço correto exigido pelo tutor -> Ajustado aqui!
        } else if (tempo === 30) {
            preco = 1;
        } else {
            return 0;
        }

        // Calcula o troco subtraindo o preço real e arredondando para centavos perfeitos
        return Math.round((this._valor - preco) * 100) / 100;
    }
}

// Guarda o temporizador para podermos cancelá-lo se houver novos cliques
let temporizador;

// Detecta o clique no botão Pagar
document.getElementById("pagar").addEventListener("click", function() {

    // Cancela a contagem anterior para o temporizador não sumir com a mensagem antes da hora
    clearTimeout(temporizador);

    // Lê o valor digitado no input e converte para número decimal (float)
    let valorPago = parseFloat(document.getElementById("valor").value);

    // Seleciona o elemento HTML que vai exibir a mensagem
    let mensagem = document.getElementById("mensagem");

    // Valida se o usuário digitou um número real e se não é negativo
    if (isNaN(valorPago) || valorPago < 0) {
        mensagem.textContent = "Digite um valor válido.";
        mensagem.className = "erro"; // Adiciona a classe visual de erro (vermelho)
    } else {
        // Cria o objeto da classe e descobre a qual tempo o valor dá direito
        let parquimetro = new Parquimetro(valorPago);
        let tempo = parquimetro.calcularTempo();

        // Se o dinheiro foi pouco, exibe mensagem de saldo insuficiente
        if (tempo === "Valor insuficiente") {
            mensagem.textContent = tempo;
            mensagem.className = "erro"; // Vermelho
        } else {
            // Se deu certo, calcula o troco e formata para o padrão brasileiro de moeda
            let troco = parquimetro.calcularTroco(tempo);

            mensagem.textContent =
                "Tempo de estacionamento: " + tempo +
                " minutos. Troco: R$ " +
                troco.toFixed(2).replace(".", ",");
            
            mensagem.className = "sucesso"; // Verde
        }
    }

    // Programa para apagar a mensagem da tela automaticamente após 15 segundos
    temporizador = setTimeout(function() {
        mensagem.textContent = "";
        mensagem.className = ""; // Limpa a classe de cor também
    }, 15000);
});


