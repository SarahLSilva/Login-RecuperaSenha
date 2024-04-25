document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('recoveryForm');
    const emailInput = document.getElementById('email');
    
    form.addEventListener('submit', function(event) {
        if (!emailInput.value) {
            event.preventDefault(); // Interrompe a submissão do formulário
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, preencha o campo de e-mail.'
            });
        }
    });
});
