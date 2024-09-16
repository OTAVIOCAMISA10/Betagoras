document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-btn');
    const registerButton = document.querySelector('.register-btn');

    loginButton.addEventListener('click', () => {
        alert('Funcionalidade de login em desenvolvimento.');
    });

    registerButton.addEventListener('click', () => {
        alert('Funcionalidade de cadastro em desenvolvimento.');
    });
});// script.js
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-btn');
    const registerButton = document.querySelector('.register-btn');
    const logoutButton = document.getElementById('logout-btn');
    const userBalanceSpan = document.getElementById('user-balance');

    // Saldo inicial do usuário
    let userBalance = 100.00;

   // Função para adicionar uma pequena animação ao saldo ao ser atualizado
function animateBalanceUpdate() {
    const balanceSpan = document.getElementById('user-balance');
    balanceSpan.style.transition = 'none'; // Reset any previous transition
    balanceSpan.style.transform = 'scale(1.2)'; // Small scale up effect
    setTimeout(() => {
        balanceSpan.style.transition = 'transform 0.2s ease'; // Smooth transition
        balanceSpan.style.transform = 'scale(1)'; // Return to normal size
    }, 150);
}

// Atualiza o saldo na interface e adiciona animação
function updateUserBalance() {
    userBalanceSpan.textContent = userBalance.toFixed(2);
    animateBalanceUpdate(); // Chamando a animação sempre que o saldo é atualizado
}


    // Ações de login e cadastro
    loginButton.addEventListener('click', () => {
        alert('Funcionalidade de login em desenvolvimento.');
    });

    registerButton.addEventListener('click', () => {
        alert('Funcionalidade de cadastro em desenvolvimento.');
    });

    // Ação de logout
    logoutButton.addEventListener('click', () => {
        alert('Você saiu da sua conta.');
        // Lógica para realizar logout pode ser implementada aqui
    });

    // Atualiza o saldo ao carregar a página
    updateUserBalance();
});

