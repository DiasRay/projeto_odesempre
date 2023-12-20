// Função para avaliação do Atendimento
function AvaliarAtendimento(estrela) {
    const stars = document.querySelectorAll('.estrelas1 img');
    let avaliacao = 0;

    for (let i = 0; i < 5; i++) {
        if (i < estrela) {
            stars[i].src = "./src/midia/star1.png";
            avaliacao = estrela;
        } else {
            stars[i].src = "./src/midia/star0.png";
        }
    }

    document.getElementById('ratingAtendimento').innerHTML = avaliacao;
}

// Função para avaliação da Loja
function AvaliarLoja(estrela) {
    const stars = document.querySelectorAll('.estrelas2 img');
    let avaliacao = 0;

    for (let i = 0; i < 5; i++) {
        if (i < estrela) {
            stars[i].src = "./src/midia/star1.png";
            avaliacao = estrela;
        } else {
            stars[i].src = "./src/midia/star0.png";
        }
    }

    document.getElementById('ratingLoja').innerHTML = avaliacao;
}


// Função para avaliação da Comida
function AvaliarComida(estrela) {
    const stars = document.querySelectorAll('.estrelas3 img');
    let avaliacao = 0;

    for (let i = 0; i < 5; i++) {
        if (i < estrela) {
            stars[i].src = "./src/midia/star1.png";
            avaliacao = estrela;
        } else {
            stars[i].src = "./src/midia/star0.png";
        }
    }

    document.getElementById('ratingComida').innerHTML = avaliacao;
}

// Função para avaliação da Limpeza
function AvaliarLimpeza(estrela) {
    const stars = document.querySelectorAll('.estrelas4 img');
    let avaliacao = 0;

    for (let i = 0; i < 5; i++) {
        if (i < estrela) {
            stars[i].src = "./src/midia/star1.png";
            avaliacao = estrela;
        } else {
            stars[i].src = "./src/midia/star0.png";
        }
    }

    document.getElementById('ratingLimpeza').innerHTML = avaliacao;
}

// Função para avaliação da Entrega
function AvaliarEntrega(estrela) {
    const stars = document.querySelectorAll('.estrelas5 img');
    let avaliacao = 0;

    for (let i = 0; i < 5; i++) {
        if (i < estrela) {
            stars[i].src = "./src/midia/star1.png";
            avaliacao = estrela;
        } else {
            stars[i].src = "./src/midia/star0.png";
        }
    }

    document.getElementById('ratingEntrega').innerHTML = avaliacao;
}

// Função para avaliação da Embalagem
function AvaliarEmbalagem(estrela) {
    const stars = document.querySelectorAll('.estrelas6 img');
    let avaliacao = 0;

    for (let i = 0; i < 5; i++) {
        if (i < estrela) {
            stars[i].src = "./src/midia/star1.png";
            avaliacao = estrela;
        } else {
            stars[i].src = "./src/midia/star0.png";
        }
    }

    document.getElementById('ratingEmbalagem').innerHTML = avaliacao;
}

function feed() {
    alert("Agradecemos pelo seu feeedback!");
  }