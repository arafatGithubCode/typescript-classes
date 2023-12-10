"use strict";
// const formEl = document.querySelector("form");
// const formEl = document.querySelector("form") as HTMLFormElement;
//hover on formEl to see dif
const formEl = document.querySelector(".user_form");
// const formEl = document.querySelector("user_form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const textArea = document.querySelector("#textarea");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        textArea: textArea.value,
    };
    console.log(data);
});
