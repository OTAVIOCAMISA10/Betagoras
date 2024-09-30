document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-btn');
    const registerButton = document.querySelector('.register-btn');

});

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

    // Ação de logout
    logoutButton.addEventListener('click', () => {
        alert('Você saiu da sua conta.');
        // Lógica para realizar logout pode ser implementada aqui
    });

    // Atualiza o saldo ao carregar a página
    updateUserBalance();
});

document.addEventListener('DOMContentLoaded', function () {
    // Modal elements
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');

    // Show modal on login button click
    document.querySelector('.login-btn').addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal when the 'X' is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission (for example purposes, simply close the modal)
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Login efetuado com sucesso!');
        modal.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Elements for register modal
    const closeRegisterBtn = document.querySelector('.close-register');
    const registerForm = document.getElementById('register-form');
    const switchToLogin = document.getElementById('switch-to-login');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const openRegisterLink = document.getElementById('open-register');
    const openLoginLink = document.getElementById('open-login');

    // Show register modal when clicking on "Crie uma agora!" in the login modal
    document.querySelector('.register-btn').addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.style.display = 'block';
    });

    // Close register modal when the 'X' is clicked
    closeRegisterBtn.addEventListener('click', function () {
        registerModal.style.display = 'none';
    });

    // Close register modal when clicking outside of the modal content
    window.addEventListener('click', function (e) {
        if (e.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Switch back to login modal
    switchToLogin.addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.style.display = 'none';
        modal.style.display = 'block';
    });

    // Handle form submission (for example purposes, simply close the modal)
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Conta cadastrada com sucesso!');
        registerModal.style.display = 'none';
    });
      // Abrir o modal de cadastro a partir do link no modal de login
      openRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    // Abrir o modal de login a partir do link no modal de cadastro
    openLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    });
});
