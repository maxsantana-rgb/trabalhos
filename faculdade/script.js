    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let maxTentativas = 10;
    let botao = document.getElementById("adivinhar");

    botao.addEventListener("click", adivinhar);
    function adivinhar() 
        {
                let tentativa =parseInt(document.getElementById("jogo").value);
                if(tentativa < 1 || tentativa > 100)
                {
                        alert("Por favor, insira um número entre 1 e 100.");
                        return;
                }
                if(tentativa < numeroSecreto)
                {
                        alert("O número secreto é maior!");
                    tentativas++;
                        alert("Tentativa " + tentativas + " de " + maxTentativas);
                }
                else if(tentativa > numeroSecreto)
                {
                        alert("O número secreto é menor!");
                    tentativas++;
                    alert("Tentativa " + tentativas + " de " + maxTentativas);
                }
                else
                {
                        alert("Parabéns! Você acertou o número secreto!");
                        return;
                }
                if(tentativas >= maxTentativas)
        {
                alert("Você atingiu o número máximo de tentativas. O número secreto era: " + numeroSecreto);
                botao.disabled = true;
        }
        
        }