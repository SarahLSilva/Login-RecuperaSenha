document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('codeForm');
    const codeInput = document.getElementById('code');
 
    form.addEventListener('submit', function(event) {
        if (!codeInput.checkValidity()) {
            event.preventDefault();
            alert("Por favor, insira o código de recuperação.");
        }
    });
});