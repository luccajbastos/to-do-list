const inputTexto = document.getElementById("texto");
const inputBotao = document.getElementById("botao");
const error = document.getElementById("error");
const tarefas = document.querySelector('.panel-list');
const panel = document.querySelector('.panel')

tarefas.style.display = "none";

let tarefasAdicionadas = [];

function showError(msg) {
    error.textContent = msg;
    error.style.display = "block";
    setTimeout(() => {
       error.style.display = "none";
    }, 4000);
}

function process(){
    if(!inputTexto.value) {
        showError("Coloque sua tarefa abaixo.");
    } else {
        tarefasAdicionadas.push(inputTexto.value);
        tarefas.style.display = "block";
        var div = document.createElement("div");
        for(let i=0;i<tarefasAdicionadas.length;i++){
            var conteudo = `<input type='checkbox' id="box"><span id='tarefa'>${tarefasAdicionadas[i]}</span>`;
            panel.insertBefore(div, tarefas);
            div.innerHTML = conteudo;
        }
    }
}
inputBotao.addEventListener('click', () => {
    if(tarefasAdicionadas.length <= 15){
        process();
    } else {
        showError("Máximo de tarefas atingido!")
    }
    
});