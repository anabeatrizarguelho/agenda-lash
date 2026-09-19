function initOpenModal() {
    const openModalBtn = document.getElementById('abrirModal');
    const modal = document.getElementById('meuModal');
    const closeModal = document.querySelector('.cancel-btn')

    openModalBtn.addEventListener('click', () => {
        modal.showModal();
    });

    closeModal.addEventListener('click', () => {
        modal.close();
    });
}

initOpenModal();