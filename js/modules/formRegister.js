import { registerUser } from "./auth.js";

export default function initFormRegister() {
    const form = document.getElementById('formRegister')

    if (!form);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        try {
            const user = await registerUser(email,senha);
            console.log("Deu certo!", user);
        } catch (error) {
            console.log("Deu erro!", error.code);
        };
    })
}