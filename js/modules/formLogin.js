import { loginUser } from "./auth.js"

export default function initFormLogin() {
    const form = document.getElementById('formLogin');
    const mensagemError = document.getElementById('mensagem');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        try {
            await loginUser (email,senha);
            window.location.replace("home.html");
        } catch (error) {
            if (error.code === "auth/network-request-failed") {
                mensagemError.textContent = "Sem conexão. Verifique a sua internet"
            } else if (error.code === "auth/too-many-requests") {
                mensagemError.textContent = "Muitas tentativas. Tente novamente em alguns minutos."
            } else {
                mensagemError.textContent = "Email ou senha incorreto, verifique novamente os seu dados."
            }
        }
    })
}