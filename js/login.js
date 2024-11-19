 const form = document.getElementById('loginForm');
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateInputs();
        });

        function validateInputs() {
            const usernameValue = username.value.trim();
            const passwordValue = password.value.trim();

            if(usernameValue === '') {
                setError(username, 'Nome de usuário é obrigatório');
            } else {
                setSuccess(username);
            }

            if(passwordValue === '') {
                setError(password, 'Senha é obrigatória');
            } else if (passwordValue.length < 8) {
                setError(password, 'A senha deve ter pelo menos 8 caracteres');
            } else {
                setSuccess(password);
            }

            if(!document.querySelectorAll('.error:not(:empty)').length) {
                alert('Login bem-sucedido!');
                form.reset();
            }
        }

        function setError(input, message) {
            const errorDisplay = document.getElementById(input.name + 'Error');
            errorDisplay.textContent = message;
            // input.classList.add('glitch');
            // setTimeout(() => {
            //     input.classList.remove('glitch');
            // }, 500);
        }

        function setSuccess(input) {
            const errorDisplay = document.getElementById(input.name + 'Error');
            errorDisplay.textContent = '';
        }

        function LoginUser(username , password){
            
        }