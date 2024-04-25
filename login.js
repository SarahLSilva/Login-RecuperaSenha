document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("login_form");
 
    form.addEventListener("submit", function(event) {
        var email = document.getElementsByName("email")[0];
        var senha = document.getElementsByName("senha")[0];
 
        if (!email.value || !senha.value) {
            event.preventDefault();
            alert("Todos os campos são obrigatorios");
        }
    });
});