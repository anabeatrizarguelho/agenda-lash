function initHidePassword() {
    const mostrarSenha = document.getElementById("showPassword");
    const ocultarSenha = document.getElementById("hidePassword");

    if (!ocultarSenha) return;

    ocultarSenha.addEventListener("click", function() {
        ocultarSenha.classList.toggle('fa-eye-slash');
        ocultarSenha.classList.toggle('fa-eye');
        

        if(mostrarSenha.type === 'password') {
            mostrarSenha.type = 'text'
        } else {
            mostrarSenha.type = 'password'
        }
    })
};
initHidePassword();