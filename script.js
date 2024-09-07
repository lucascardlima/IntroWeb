const imagem = document.getElementById('imagem');

        // Função que será chamada a cada vez que a página for rolada
        window.addEventListener('scroll', () => {
            // Calcula a opacidade com base na posição de rolagem
            const scrollPosition = window.scrollY; // Posição da rolagem
            const windowHeight = window.innerHeight; // Altura da janela

            // Define a opacidade como um valor entre 1 e 0, onde maior rolagem = mais opaco
            const newOpacity = 1 - scrollPosition / windowHeight;

            // Aplica o novo valor de opacidade, limitando para não ficar abaixo de 0
            imagem.style.opacity = Math.max(newOpacity, 0);
        });