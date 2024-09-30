document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    // Validações simples
    if (password !== confirmPassword) {
        message.textContent = 'As senhas não coincidem!';
        return;
    }

    // Limpa a mensagem de erro
    message.textContent = '';

    // Aqui você pode enviar os dados para o backend (exemplo usando console.log)
    console.log('Usuário cadastrado:', { username, email, password });

    alert('Cadastro realizado com sucesso!');
    document.getElementById('registerForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('message');

    // Aqui você pode adicionar a lógica de autenticação (exemplo usando console.log)
    console.log('Usuário tentando entrar:', { email, password });

    alert('Login realizado com sucesso!');
    document.getElementById('loginForm').reset();
});

// Alterna entre Cadastro e Login
document.getElementById('toggleLink').addEventListener('click', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const toggleLink = document.getElementById('toggleLink');
    const formTitle = document.getElementById('form-title');

    if (registerForm.style.display === 'none') {
        // Mostrar Cadastro
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        formTitle.textContent = 'Cadastro de Usuário';
        toggleLink.textContent = 'Já tem uma conta? Entre aqui';
    } else {
        // Mostrar Login
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Entrar na Conta';
        toggleLink.textContent = 'Não tem uma conta? Cadastre-se aqui';
    }
    
    // Animação suave ao trocar de formulário
    document.querySelector('.container').classList.add('fade-in');
});
