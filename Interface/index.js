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
    balanceSpan.style.transition = 'none'; // Redefinir qualquer transição anterior
    balanceSpan.style.transform = 'scale(1.2)'; // Efeito de aumento de pequena escala
    setTimeout(() => {
        balanceSpan.style.transition = 'transform 0.2s ease'; // Transição suave
        balanceSpan.style.transform = 'scale(1)'; // Voltar ao tamanho normal
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
    // Elementos modal
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');

    // Mostrar modal ao clicar no botão de login
    document.querySelector('.login-btn').addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    //Fechar modal quando o 'X' for clicado
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fechar modal ao clicar fora do conteúdo modal
    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Lidar com o envio do formulário (para fins de exemplo, basta fechar o modal)
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Login efetuado com sucesso!');
        modal.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Elementos para modal de registro
    const closeRegisterBtn = document.querySelector('.close-register');
    const registerForm = document.getElementById('register-form');
    const switchToLogin = document.getElementById('switch-to-login');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const openRegisterLink = document.getElementById('open-register');
    const openLoginLink = document.getElementById('open-login');

    
     //Mostra o modal de cadastro ao clicar 
    document.querySelector('.register-btn').addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.style.display = 'block';
    });

    // Fecha o modal de registro quando o 'X' é clicado
    closeRegisterBtn.addEventListener('click', function () {
        registerModal.style.display = 'none';
    });

    // Fechar registro modal ao clicar fora do conteúdo modal
    window.addEventListener('click', function (e) {
        if (e.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Voltar para o modo de login
    switchToLogin.addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.style.display = 'none';
        modal.style.display = 'block';
    });

    // Lidar com o envio do formulário (para fins de exemplo, basta fechar o modal)
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Conta cadastrada com sucesso!');
        registerModal.style.display = 'none';
    });
      // Abra o modal de cadastro a partir do link no modal de login
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
