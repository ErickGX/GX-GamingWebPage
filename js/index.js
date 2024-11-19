document.addEventListener('DOMContentLoaded', function() {
    const comunidadeForm = document.getElementById('comunidade-form');
    
    comunidadeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Obrigado por se inscrever :  ${email}! Bem vindo a Comunidade GX - Gaming.`);
        this.reset();
    });
});