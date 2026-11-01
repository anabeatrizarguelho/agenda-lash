export default function initFormCliente() {
    const formCliente = document.getElementById('formAddCliente');
    
    formCliente.addEventListener('submit', (event) => {
    event.preventDefault;

    const nomeCliente = document.getElementById('nome');
    const whatsappCliente = document.getElementById('whatsapp');
    const dataAtendimento = document.getElementById('dataAtendimento');

    const resultadoNomeCliente = nomeCliente.value;
    const resultadoWhatsappCliente = whatsappCliente.value;
    const resultadoDataAtendimento = dataAtendimento.value;

    console.log(resultadoNomeCliente, resultadoWhatsappCliente, resultadoDataAtendimento);
})
}