const texto = "Passando para te lembrar que, mesmo que o céu esteja cinza hoje, eu estou aqui. Não precisa dizer nada se não quiser, só quero que saiba que estarei com você em cada momento, nos melhores e principalmente nos mais difíceis. Meu Peito e meu amor são sempre seus. Se Cuida Princesa.";
let i = 0;

function digitar() {
    if (i < texto.length) {
        document.getElementById("mensagem").innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 50);
    }
}

function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Iniciar funções
setInterval(criarCoracao, 500);
window.onload = digitar;