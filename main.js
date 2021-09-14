let nome = prompt("Qual seu nome?");
if (nome == null || "") { nome = "Anônimo"};
document.getElementById("nome").textContent = "Olá, " + nome + " !";

function participarVestibulinho() {
        let resposta = prompt("Você que participar do vestibulinho? reponda com sim ou não");
        resposta.toLowerCase();
        caseResposta(resposta);
}

participarVestibulinho()

function caseResposta(resposta) {
        switch (resposta) {
                case 'sim':
                        alert("Legal, vamos começar");
                        const pergunta1 = prompt("Quanto é 5 X 7?\na:30\nb:35\nc:40");
                        if (pergunta1 == "b" || pergunta1 == 35) {
                                document.getElementById("resposta1certa")
                                        .textContent = "Pergunta 1";

                        } else {
                                (pergunta1 == "a" || pergunta1 == 30 || pergunta1 == "c" || pergunta == "40");
                                document.getElementById("resposta1errada")
                                        .textContent = "Pergunta 1";

                        }
                        const pergunta2 = prompt("Quanto é 100 + 50?\na:150\nb:350\nc:400");
                        if (pergunta2 == "a" || pergunta2 == 150) {
                                document.getElementById("resposta2certa")
                                        .textContent = "Pergunta 2";


                        } else {
                                (pergunta2 == "b" || pergunta2 == 350 || pergunta2 == "c" || pegunta == "400");
                                document.getElementById("resposta2errada")
                                        .textContent = "Pergunta 2";

                        }
                        const pergunta3 = prompt("Quanto é 200 - 40?\na:160\nb:100\nc:130");
                        if (pergunta3 == "a" || pergunta3 == 160) {
                                document.getElementById("resposta3certa")
                                        .textContent = "Pergunta 3";

                        } else {
                                (pergunta3 == "b" || pergunta3 == "100" || pergunta3 == "c" || pergunta == "130");
                                document.getElementById("resposta3errada")
                                        .textContent = "Pergunta 3";
                        }
                        break;
                case 'não':
                        alert(" Tchauzinho, até a próxima.");
                        break;
                default:
                        alert("Não entendi, repita por favor.");
                        participarVestibulinho();
        }
}