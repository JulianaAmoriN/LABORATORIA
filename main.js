let nome = prompt('Qual seu nome?');
(nome == null || nome == '' || nome == ' ') ? nome = 'Anônimo': nome;
document.getElementById('nome').textContent = 'Olá, ' + nome + ' !';

function participarVestibulinho() {
        let resposta;
        resposta = prompt('Você que participar do vestibulinho? reponda com sim ou não');
        resposta === null ? resposta = 'não' : resposta;
        menuResposta(resposta.toLowerCase());
}

participarVestibulinho();

function menuResposta(resposta) {

        switch (resposta) {
                case 'sim':
                        alert('Legal, vamos começar');
                        provaVestibulinho();
                        break;
                case 'não':
                        alert(' Tchauzinho, até a próxima.');
                        break;
                default:
                        alert('Não entendi, repita por favor.');
                        participarVestibulinho();
        }
}

function provaVestibulinho() {
        const pergunta_1 = prompt('Quanto é 5 X 7?\na:30\nb:35\nc:40');
        const pergunta_2 = prompt('Quanto é 100 + 50?\na:150\nb:350\nc:400');
        const pergunta_3 = prompt('Quanto é 200 - 40?\na:160\nb:100\nc:130');

        correcaoResposta1(pergunta_1.toLowerCase());
        correcaoResposta2(pergunta_2.toLowerCase());
        correcaoResposta3(pergunta_3.toLowerCase());
}

function correcaoResposta1(pergunta_1) {
        (pergunta_1 == 'b' || pergunta_1 == 35) ? document.getElementById('resposta1certa').textContent = 'Pergunta 1' : 
                document.getElementById('resposta1errada').textContent = 'Pergunta 1';
}

function correcaoResposta2(pergunta_2) {

        (pergunta_2 === 'a' || pergunta_2 == 150) ? document.getElementById('resposta2certa').textContent = 'Pergunta 2' : 
                document.getElementById('resposta2errada').textContent = 'Pergunta 2';
}

function correcaoResposta3(pergunta_3) {
        (pergunta_3 === 'a' || pergunta_3 == 160) ? document.getElementById('resposta3certa').textContent = 'Pergunta 3' : 
                document.getElementById('resposta3errada').textContent = 'Pergunta 3';
}

const buttonJogarNovamente = document.getElementById('jogarNovamente');
buttonJogarNovamente.addEventListener('click', jogarNovamente);

function jogarNovamente(event) {
        event.preventDefault();
        const cleanText = ['resposta1certa', 'resposta2certa', 'resposta3certa', 'resposta1errada', 'resposta2errada', 'resposta3errada'];
        for (let i = 0; i < cleanText.length; ++i) {
                document.getElementById(`${cleanText[i]}`).textContent = "";
        }
        provaVestibulinho();
}