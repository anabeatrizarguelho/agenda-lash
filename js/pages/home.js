import initOpenModal from "../modules/modal.js";
import { definirStatus, calculoDiasDesde } from "../modules/datas.js";
import initFormCliente from "../modules/form-cliente.js";
import initValidaModal from "../modules/validacao-modal.js";
import initLogout from "../modules/logout.js";
import { protegerPagina } from "../modules/auth.js";

protegerPagina((user) => {
    document.getElementById("nomeUsuario").textContent = user.displayName || user.email;
})


initOpenModal();
initFormCliente();
initValidaModal();
initLogout();