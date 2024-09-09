var frutas = [];

        
        function adicionarFruta() {
            var novaFruta = prompt("Digite o nome da fruta a ser adicionada:");

            if (novaFruta) {
                frutas.push(novaFruta);
                escreverFrutas();
            }
        }

        
        function escreverFrutas() {
            var container = document.getElementById('containerFrutas');
            container.innerHTML = '<strong>Lista de Frutas:</strong><ul>';

            frutas.forEach(function(fruta, index) {
                container.innerHTML += '<li>' + index + ': ' + fruta + '</li>';
            });

            container.innerHTML += '</ul>';
        }

        
        function buscarPorPosicao() {
            if (frutas.length === 0) {
                alert('A lista de frutas está vazia. Adicione frutas primeiro.');
                return;
            }

            var posicao = prompt("Digite a posição da fruta (0 a " + (frutas.length - 1) + "):");

            if (posicao !== null) {
                posicao = parseInt(posicao);

                if (posicao >= 0 && posicao < frutas.length) {
                    document.getElementById('resultadoBusca').innerHTML = "Fruta na posição " + posicao + ": " + frutas[posicao];
                } else {
                    document.getElementById('resultadoBusca').innerHTML = "Posição inválida. Escolha um número entre 0 e " + (frutas.length - 1);
                }
            }
        }

        var linguagem = [];

        
        function adicionarLinguagem() {
            var novaLinguagem = prompt("Digite o nome da linguagem a ser adicionada:");

            if (novaLinguagem) {
                linguagem.push(novaLinguagem);
                escreverLinguagem();
            }
        }

        
        function escreverLinguagem() {
            var container = document.getElementById('containerLinguagem');
            container.innerHTML = '<strong>Lista de Linguagens:</strong><ul>';

            linguagem.forEach(function(linguagem, index) {
                container.innerHTML += '<li>' + index + ': ' + linguagem + '</li>';
            });

            container.innerHTML += '</ul>';
        }

        
        function buscarPorPosicaoLinguagem() {
            if (linguagem.length === 0) {
                alert('A lista de linguagens está vazia. Adicione linguagens primeiro.');
                return;
            }

            var posicao = prompt("Digite a posição da linguagem (0 a " + (frutas.length - 1) + "):");

            if (posicao !== null) {
                posicao = parseInt(posicao);

                if (posicao >= 0 && posicao < linguagem.length) {
                    document.getElementById('resultadoBusca').innerHTML = "Linguagem na posição " + posicao + ": " + linguagem[posicao];
                } else {
                    document.getElementById('resultadoBusca').innerHTML = "Posição inválida. Escolha um número entre 0 e " + (linguagem.length - 1);
                }
            }
        }
