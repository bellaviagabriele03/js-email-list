// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo quelle precedenti)
// Far sì che le email vengono stampati solo quando arrivano tutti i 10 em


const emailAPI = `https://flynn.boolean.careers/exercises/api/random/mail`;
const listElem = document.querySelector("#list");
const btnElem = document.querySelector("#btn");

let btnONOFF = false;
let counter = 0;
let htmlString = "";



btnElem.addEventListener("click", function () {
    if (btnONOFF === false) {
        counter = 0;
        htmlString = "";
        for (let i = 0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(function (resp) {
                let risposta = resp.data.response;
                counter++;
                htmlString += `<li class = "text-white">Email n°${counter}:  <a href="">${risposta}</a></li>`;

                if (counter === 10) {
                    listElem.innerHTML = htmlString;
                    btnONOFF = true;
                }
            })
        }


    } else {
        counter = 0;
        htmlString = "";
        for (let i = 0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(function (resp) {
                let risposta = resp.data.response;
                counter++;
                htmlString += `<li class = "text-white">Email n°${counter}:  <a href="">${risposta}</a></li>`;

                if (counter === 10) {
                    listElem.innerHTML = htmlString;
                    btnONOFF = false;
                }
            })
        }
    }


})


