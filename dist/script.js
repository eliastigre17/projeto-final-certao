"use strict";
//@ts-nocheck
const descricao = document.getElementById("descricao");
const detalhamento = document.getElementById("detalhamento");
const form = document.querySelector("form");
const tbody = document.getElementById("tbody");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    create();
});
window.onload = function () {
    read();
};
const atualizarLocalStorage = (produtos) => { localStorage.setItem('info', JSON.stringify(produtos)); };
function deletar() {
    const infos = JSON.parse(localStorage.getItem("info"));
    const botoesdelete = document.querySelectorAll('[data="delete"]');
    const array = [];
    let index;
    botoesdelete.forEach(btn => {
        array.push(btn);
    });
    array.forEach(btn => {
        btn.onclick = () => {
            index = (array.indexOf(btn));
            infos.splice(index, 1);
            localStorage.setItem("info", JSON.stringify(infos));
            location.reload();
        };
    });
}
function create() {
    let infograv = new Array();
    infograv = JSON.parse(localStorage.getItem("info")) ? JSON.parse(localStorage.getItem("info")) : [];
    infograv.push({
        "descricao": descricao.value,
        "detalhamento": detalhamento.value
    });
    localStorage.setItem("info", JSON.stringify(infograv));
    read();
}
function read() {
    tbody.innerHTML = "";
    let infograv = new Array();
    infograv = JSON.parse(localStorage.getItem("info")) ? JSON.parse(localStorage.getItem("info")) : [];
    if (infograv) {
        for (let i = 0; i < infograv.length; i++) {
            let addTr = document.createElement('tr');
            addTr.innerHTML = `<td> # </td><td> ${infograv[i].descricao} </td><td> ${infograv[i].detalhamento} </td> 
            <td class="col-1">
            <div class="d-flex d-md-none flex-column justify-between align-items-center">
                <button class="w-50 btn rounded-5 bg-success rounded"></button>
                <button class="w-50 btn rounded-5 bg-danger rounded" ></button>
            </div>
            <div class="d-none d-md-flex">
                <button class="btn btn-success" data="edit">Editar</button>
                <button class="btn btn-danger ms-3" data="delete">Excluir</button>
            </div>
            </td>`;
            tbody.appendChild(addTr);
        }
        deletar();
        editar();
    }
}
function editar() {
    const editBtns = document.querySelectorAll('[data="edit"]');
    editBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.target.parentNode.parentNode.parentNode.setAttribute("contentEditable", "true");
        };
    });
}
