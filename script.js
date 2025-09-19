const form = document.getElementById('form');
const nomeInput = document.getElementById('nome');
const lista = document.getElementById('lista');
const sortearBtn = document.getElementById('sortear');
const resultadoDiv = document.getElementById('resultado');
let participantes = [];

function atualizarLista() {
    lista.innerHTML = '';
    participantes.forEach((nome, i) => {
        const li = document.createElement('li');
        li.textContent = nome;
        const btn = document.createElement('button');
        btn.textContent = 'x';
        btn.className = 'removeBtn';
        btn.onclick = () => {
            participantes.splice(i, 1);
            atualizarLista();
        };
        li.appendChild(btn);
        lista.appendChild(li);
    });
}