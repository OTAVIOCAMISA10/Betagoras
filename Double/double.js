const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const historyDiv = document.getElementById("history");
const feedback = document.getElementById("feedback");
const balanceSpan = document.getElementById("balance");
const betInput = document.getElementById("betAmount");
const colors = ["red", "white", "black"];

let selectedColor = "red"; // Seleção de cor padrão
let balance = 100.0; // Saldo inicial

// Selecione a cor ao clicar no botão
document.querySelectorAll(".color-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedColor = button.getAttribute("data-color");
    document
      .querySelectorAll(".color-button")
      .forEach((btn) => (btn.style.border = "none"));
    button.style.border = "3px solid #fff";
  });
});

// Iniciar simulação de jogo
function startGame() {
  const betAmount = parseFloat(betInput.value);
  if (isNaN(betAmount) || betAmount <= 0) {
    alert("Por favor, insira um valor de aposta válido.");
    return;
  }
  if (betAmount > balance) {
    alert("Saldo insuficiente.");
    return;
  }
  feedback.style.opacity = 0; // Redefinir a visibilidade do feedback
  setTimeout(() => {
    const resultColor = colors[Math.floor(Math.random() * colors.length)];
    addHistoryItem(resultColor);
    updateBalance(resultColor, betAmount);
    displayFeedback(resultColor);
  }, 500); // Simular atraso para realismo
};

// Adicionar resultado ao histórico
function addHistoryItem(color) {
  const item = document.createElement("div");
  item.className = `history-item ${color}-bg`;
  item.innerText = Math.floor(Math.random() * 15) + 1; // Número aleatório entre 1-15
  historyDiv.prepend(item);
}

// Atualizar saldo com base no resultado do jogo
function updateBalance(resultColor, betAmount) {
  if (resultColor === selectedColor) {
    let multiplier = resultColor === "white" ? 14 : 2;
    balance += betAmount * multiplier;
    feedback.textContent = `Você venceu! Ganhou R$ ${(
      betAmount * multiplier
    ).toFixed(2)}`;
    feedback.className = "feedback win";
  } else {
    balance -= betAmount;
    feedback.textContent = `Você perdeu! Perdeu R$ ${betAmount.toFixed(
      2
    )}`;
    feedback.className = "feedback lose";
  }
  balanceSpan.textContent = balance.toFixed(2);
}

// Exibir feedback com base no resultado do jogo
function displayFeedback(resultColor) {
  feedback.style.opacity = 1; // Mostrar Resultado
}

// Função para voltar à página anterior
function backPage() {
  window.history.back(); // Volta para a página anterior
};