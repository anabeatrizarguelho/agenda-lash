/* 
Correção de lógica:

- Se passado mais de 20 dias: Vai exibir "Vencido";
- Se for igual ou MAIOR QUE 18(Vai avisar 2 dias antes): Vai exibir "Manutenção"
 
*/

const DIAS_AVISO =  18;
const DIAS_PRAZO =  20;


export function definirStatus(dias) {
    if (dias > DIAS_PRAZO) {
        return "vencido"
    } else if (dias >= DIAS_AVISO) {
        return "manutencao"
    } else {
        return "em-dia";
    }
}

export function calculoDiasDesde(dataString) {
    const formatando = dataString.split("-");

    const ano = Number(formatando[0]);
    const mes = Number(formatando[1])
    const dia = Number(formatando[2])

    const dataAtendimento = new Date(ano, mes - 1, dia)
    
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const diferenca = hoje - dataAtendimento;
    const devolveDias = Math.floor(diferenca / 86400000);

    return devolveDias;
}