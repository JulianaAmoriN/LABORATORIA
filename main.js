let nome = prompt("Qual seu nome?");
if (nome == null || nome == "" || nome == " ") {
        nome = "Anônimo"
};
document.getElementById("nome").textContent = "Olá, " + nome + " !";

function participarVestibulinho() {
        let resposta;
        resposta = prompt("Você que participar do vestibulinho? reponda com sim ou não");
        if (resposta === null){
                resposta = "não"
        }
        resposta.toLowerCase();
        menuResposta(resposta);
}

participarVestibulinho();

function menuResposta(resposta) {

        switch (resposta) {
                case "sim":
                        alert("Legal, vamos começar");
                        provaVestibulinho();
                        break;
                case "não":
                        alert(" Tchauzinho, até a próxima.");
                        break;
                default:
                        alert("Não entendi, repita por favor.");
                        participarVestibulinho();
        }
}

function provaVestibulinho() {
        const pergunta1 = prompt("Quanto é 5 X 7?\na:30\nb:35\nc:40");
        const pergunta2 = prompt("Quanto é 100 + 50?\na:150\nb:350\nc:400");
        const pergunta3 = prompt("Quanto é 200 - 40?\na:160\nb:100\nc:130");

        correcaoResposta1(pergunta1);
        correcaoResposta2(pergunta2);
        correcaoResposta3(pergunta3);
}

function correcaoResposta1(pergunta1) {
        if (pergunta1 == "b" || pergunta1 == 35) {
                pergunta1 = "certa";
        }

        switch (pergunta1) {
                case "certa":
                        document.getElementById("resposta1certa")
                                .textContent = "Pergunta 1";
                        break;
                default:
                        document.getElementById("resposta1errada")
                                .textContent = "Pergunta 1";
        }
}

function correcaoResposta2(pergunta2) {

        if (pergunta2 === "a" || pergunta2 == 150) {
                pergunta2 = "certa";
        }
        switch (pergunta2) {
                case "certa":
                        document.getElementById("resposta2certa")
                                .textContent = "Pergunta 2";
                        break;
                default:
                        document.getElementById("resposta2errada")
                                .textContent = "Pergunta 2";
        }
}

function correcaoResposta3(pergunta3) {
        if (pergunta3 === "a" || pergunta3 == 160) {
                pergunta3 = "certa";
        }
        switch (pergunta3) {
                case "certa":
                        document.getElementById("resposta3certa")
                                .textContent = "Pergunta 3";
                        break;
                default:
                        document.getElementById("resposta3errada")
                                .textContent = "Pergunta 3";
        }
}

const buttonJogarNovamente = document.getElementById("jogarNovamente");
buttonJogarNovamente.addEventListener("click", jogarNovamente);

function jogarNovamente(event){
        event.preventDefault();
        provaVestibulinho();
}