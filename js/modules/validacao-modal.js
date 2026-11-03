export default function initValidaModal() {
    const inputNome = document.getElementById('nome');
    const inputWhatsApp = document.getElementById('whatsapp');
    const cancelarEnvio = document.getElementById('cancelarEnvio');

    inputNome.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\d/g, "");
    })

    inputWhatsApp.addEventListener('input', (e) => {
        let whatsapp = e.target.value.replace(/\D/g, "");

        if(whatsapp.length > 11) {
        whatsapp = whatsapp.slice(0, 11);
        }
        if(whatsapp.length > 2) {
        whatsapp = whatsapp.replace(/^(\d{2})(\d{5})(\d{0,4})/  ,  '($1) $2-$3');
        }
        e.target.value = whatsapp;
    })

    cancelarEnvio.addEventListener('click', (e) => {
        e.preventDefault();
    })

    

}