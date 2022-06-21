"use strict";
//@ts-nocheck
const signUp = e => {
    let email = document.getElementById('email').value, password = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email.toLowerCase());
    if (!exist) {
        formData.push({ email, password });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.getElementById('formData').reset();
        alert("Conta criada com sucesso!");
    }
    else {
        alert("Estes dados já estão sendo utilizados!");
    }
    e.preventDefault();
};
function signIn(e) {
    let email = document.getElementById('emailLogin').value, password = document.getElementById('passwordLogin').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if (!exist) {
        alert("Algo deu errado :(");
    }
    else {
        location.href = "recados.html";
    }
    e.preventDefault();
}
