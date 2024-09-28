const backButton = document.getElementById("backButton");
const historyDiv = document.getElementById("history");
const colors = ["red", "white", "black"];
const startButton = document.getElementById("startButton");
const balanceSpan = document.getElementById("balance");
const betInput = document.getElementById("betAmount");
const feedback = document.getElementById("feedback");
const resultArrow = document.getElementById("resultArrow");
let cardCarousel = document.getElementById("cardCarousel");
let cardWrapper = document.getElementById("cardWrapper");
let cards = document.querySelectorAll(".card");

// cards original para usar para reset o jogo apos uma partida.
const originalCards = `
  <div class="card red-bg">1</div>
  <div class="card black-bg">2</div>
  <div class="card white-bg"></div>
  <div class="card red-bg">4</div>
  <div class="card black-bg">5</div>
  <div class="card red-bg">6</div>
  <div class="card black-bg">7</div>
  <div class="card red-bg">8</div>
  <div class="card black-bg">9</div>
  <div class="card red-bg">10</div>
  <div class="card black-bg">11</div>
  <div class="card red-bg">12</div>
  <div class="card black-bg">13</div>
  <div class="card red-bg">14</div>
  <div class="card black-bg">15</div>`;

let selectedColor = null;
let balance = 100.0; // Saldo inicial
let position = 0;
let animationFrameId;
let currentIndex = 0;
let speed = 40; // Ajuste a velocidade aqui
let gameStarted = false;

// Selecione a cor ao clicar no botão
document.querySelectorAll(".color-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedColor = button.getAttribute("data-color");
    document
      .querySelectorAll(".color-button")
      .forEach((btn) => (btn.style.border = "none"));
    button.style.border = "3px solid #fff";
    const buttonColor = button.className;
    if (buttonColor.includes("white")) {
      selectedColor = "white";
    } else if (buttonColor.includes("black")) {
      selectedColor = "black";
    } else if (buttonColor.includes("red")) {
      selectedColor = "red";
    }
  });
});

// Iniciar simulação de jogo
function startGame() {
  if (gameStarted) {
    return;
  }

  const betAmount = parseFloat(betInput.value);
  if (isNaN(betAmount) || betAmount <= 0) {
    alert("Por favor, insira um valor de aposta válido.");
    return;
  } else if (betAmount > balance) {
    alert("Saldo insuficiente.");
    return;
  } else if (selectedColor == null) {
    alert("Escolha uma Cor.");
    return;
  } else if (betAmount < 3) {
    alert("A aposta deve ser no mínimo de 3 Reais.");
    return;
  }
  feedback.style.opacity = 0; // Redefinir a visibilidade do feedback

  const moveCards = () => {
    gameStarted = true;
    position -= speed; // Mover 1 pixel para a esquerda
    cardWrapper.style.transform = `translateX(${position}px)`;

    // Solicitar o próximo frame de animação

    animationFrameId = requestAnimationFrame(moveCards);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          //console.log(
          //  `A box ${entry.target.textContent} saiu da div maior.`
          //);
          currentIndex++;

          entry.target.classList.add("hidden-box");

          // cria um clone do card que saiu da div principal
          const clone = entry.target.cloneNode(true);

          // remove do clone o hidden box
          clone.classList.remove("hidden-box");

          //adiciona um clone no final
          cardWrapper.appendChild(clone);

          // Recalcula a lista de cards
          if (currentIndex < cards.length) {
            cards = document.querySelectorAll(".card");
            observer.observe(cards[currentIndex]);
          }
        }
      });
    },
    {
      root: cardCarousel, // O root é a div maior
      threshold: 0, // Ativa o callback quando 100% da div interna está visível
    }
  );
  observer.observe(cards[0]);

  // Iniciar a animação
  moveCards();

  // Parar a animação após 5 segundos
  setTimeout(() => {
    let chance = Math.random();
    if (chance <= 0.3) {
      speed -= 0.4 * speed;
    } else if (chance > 0.3 && chance <= 0.5) {
      speed -= 0.45 * speed;
    } else {
      speed -= 0.5 * speed;
    }
    setTimeout(() => {
      let chance = Math.random();
      if (chance <= 0.3) {
        speed -= 0.45 * speed;
      } else if (chance > 0.3 && chance <= 0.5) {
        speed -= 0.5 * speed;
      } else {
        speed -= 0.55 * speed;
      }
      setTimeout(() => {
        gameStarted = false;
        observer.disconnect();

        cancelAnimationFrame(animationFrameId); // Cancelar a animação
        const resultDouble = cardResult();
        addHistoryItem(resultDouble);
        updateBalance(resultDouble, betAmount);
        displayFeedback(resultDouble);

        setTimeout(() => {
          cardWrapper.innerHTML = originalCards;
          position = 0;
          cardWrapper.style.transform = `translateX(${position}px)`;

          cardCarousel = document.getElementById("cardCarousel");
          cards = document.querySelectorAll(".card");
          cardWrapper = document.getElementById("cardWrapper");
          currentIndex = 0;
          speed = 30;
        }, 1500);
      }, 1500); // 1500 milissegundos = 1.5 segundos
    }, 1500);
  }, 5000);
}

function cardResult() {
  const arrowReact = resultArrow.getBoundingClientRect();
  for (let card of cards) {
    const cardReact = card.getBoundingClientRect();
    const isOverlapping = !(
      arrowReact.top > cardReact.bottom ||
      arrowReact.bottom < cardReact.top ||
      arrowReact.left > cardReact.right ||
      arrowReact.right < cardReact.left
    );

    if (isOverlapping) {
      const cardClassName = card.className;
      const cardNumber = card.textContent;
      if (cardClassName.includes("black")) {
        console.log("caiu na preta");
        return ["black", cardNumber]; // Sai do loop assim que encontrar a primeira interseção
      } else if (cardClassName.includes("red")) {
        console.log("caiu na red");
        return ["red", cardNumber]; // Sai do loop assim que encontrar a primeira interseção
      } else if (cardClassName.includes("white")) {
        console.log("caiu na white");
        return ["white", cardNumber]; // Sai do loop assim que encontrar a primeira interseção
      }
    }
  }
}

// Adicionar resultado ao histórico
function addHistoryItem(result) {
  const item = document.createElement("div");
  item.className = `history-item ${result[0]}-bg`;
  item.innerText = result[1]; // Número aleatório entre 1-15
  historyDiv.prepend(item);
}

// Atualizar saldo com base no resultado do jogo
function updateBalance(result, betAmount) {
  if (result[0] === selectedColor) {
    let multiplier = result[0] === "white" ? 14 : 2;
    balance += betAmount * multiplier - betAmount;
    feedback.textContent = `Você venceu! Ganhou R$ ${(
      betAmount * multiplier
    ).toFixed(2)}`;
    feedback.className = "feedback win";
  } else {
    balance -= betAmount;
    feedback.textContent = `Você perdeu! Perdeu R$ ${betAmount.toFixed(2)}`;
    feedback.className = "feedback lose";
  }
  balanceSpan.textContent = balance.toFixed(2);
}

// Exibir feedback com base no resultado do jogo
function displayFeedback(result) {
  feedback.style.opacity = 1; // Mostrar Resultado
}

// Função para voltar à página anterior
function backPage() {
  window.history.back(); // Volta para a página anterior
}

window.addEventListener("beforeunload", () => {
  cancelAnimationFrame(animationFrameId);
});
