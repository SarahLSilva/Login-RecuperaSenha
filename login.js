document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
 
    var usuario = document.getElementById('usuario').value.trim();
    var senha = document.getElementById('senha').value.trim();
 
    var errorMessages = '';
 
    if (!usuario) {
        errorMessages += '<p class="error-message">* Campo de usuário é obrigatório</p>';
    }
 
    if (!senha) {
        errorMessages += '<p class="error-message">* Campo de senha é obrigatório</p>';
    }
 
    if (errorMessages) {
        document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
        // Simulação de validação de login
        if (usuario === 'admin' && senha === 'admin') {
            alert('Login bem-sucedido!');
            // Redirecionamento para página de sucesso ou outra página desejada
         } else {
                document.getElementById('errorMessages').innerHTML = '<p class="error-message">Usuário ou senha incorretos</p>';
        }
    }
    {
       
    }
})
