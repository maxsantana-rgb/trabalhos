        let numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;
        let maxTentativas = 10;
        let botao = document.getElementById("adivinhar");
        botao.addEventListener("click", adivinhar);
        let campo = document.getElementById("jogo");    


        function encerrarJogo() {
                botao.disabled = true;
                campo.disabled = true;
        };
        



        function adivinhar() 
                {
                let tentativa =parseInt(document.getElementById("jogo").value);
                        if (Number.isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
                        document.getElementById("mensagem").textContent =
                                                                                "Por favor, insira um número entre 1 e 100.";
                        return;
        }
                if(tentativa < numeroSecreto)
                {
                        document.getElementById("mensagem").textContent= "O número secreto é maior!";
                        tentativas++;
                        document.getElementById("tentativas").textContent= "Tentativas restantes: " + (maxTentativas - tentativas);
                }
                else if(tentativa > numeroSecreto)
                {
                        document.getElementById("mensagem").textContent= "O número secreto é menor!";
                        tentativas++;
                        document.getElementById("tentativas").textContent= "Tentativas restantes: " + (maxTentativas - tentativas);
                }
                else
                {
                        document.getElementById("mensagem").textContent= "Parabéns! Você acertou o número secreto!";
                        encerrarJogo();
                        return;
                }
                if(tentativas >= maxTentativas)
        {
                document.getElementById("mensagem").textContent= "Você atingiu o número máximo de tentativas. O número secreto era: " + numeroSecreto;
                botao.classList.add("perdeu");
                botao.textContent = "Jogo encerrado";
                encerrarJogo();

        }
        
        }