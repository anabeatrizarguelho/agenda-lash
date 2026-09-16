const mostrarSenha = document.getElementById("showPassword");
const ocultarSenha = document.getElementById("icone-olho");

ocultarSenha.addEventListener("click", function() {
    ocultarSenha.classList.toggle('fa-eye-slash');
    ocultarSenha.classList.toggle('fa-eye');
    

    if(mostrarSenha.type === 'password') {
         mostrarSenha.type = 'text'
    } else {
        mostrarSenha.type = 'password'
    }
})
