document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
 
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado
 
        // Verifica se o campo de usuário está vazio
        if (!usernameInput.value) {
            alert("O campo de usuário é obrigatório!");
        }
        // Verifica se o campo de senha está vazio
        else if (!passwordInput.value) {
            alert("O campo de senha é obrigatório!");
        }
        // Se nenhum campo estiver vazio, envia o formulário
        else {
            alert("Login bem sucedido!"); // Aqui você pode adicionar a lógica de login real
            form.submit();
        }
    });
});