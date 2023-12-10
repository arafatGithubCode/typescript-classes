// const formEl = document.querySelector("form");
// const formEl = document.querySelector("form") as HTMLFormElement;

//hover on formEl to see dif
const formEl = document.querySelector(".user_form") as HTMLFormElement;
// const formEl = document.querySelector("user_form");

const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const textArea = document.querySelector("#textarea") as HTMLTextAreaElement;

formEl.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    textArea: textArea.value,
  };
  console.log(data);
});
