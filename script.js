const $id_card = document.querySelector("#id-card");
const $txt_card = document.querySelector("#txt-card");
const $btns_random = document.querySelector("#btns-random");
const URL = "https://api.adviceslip.com/advice";

function fetchRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $id_card.textContent = data.slip.id;
      $txt_card.textContent = `"${data.slip.advice}"`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchRandomAdvice();

$btns_random.addEventListener("click", fetchRandomAdvice);
