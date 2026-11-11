import { logoutUser } from "./auth.js";

export default function initLogout() {
    const btnLogout = document.getElementById('logout');
    
    if (!btnLogout) return;

    btnLogout.addEventListener("click", async() => {
        try {
            await logoutUser();
            window.location.replace("login.html");
        } catch (error) {
            console.log("Erro ao sair:", error);
        }
    });
}
