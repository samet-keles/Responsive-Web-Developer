let backbag = document.querySelector("#backbag");
let shoes = document.querySelector("#shoes");

let total = document.querySelector("#total");
let shipping = document.querySelector("#shipping");

let newBackbag = document.querySelector("#newPriceBackbag");
let oldBackbag = document.querySelector("#oldPriceBackbag");

let newShoes = document.querySelector("#newPriceShoes");
let oldShoes = document.querySelector("#oldPriceShoes");

let newBackbagPrice = 54.99;
let oldBackbagPrice = 94.99;

let backBagCount = 1;
let totalPrice = 148.98;

function backBagPlus() {
  if (backBagCount <= 19) {
    backBagCount += 1;
    backbag.innerHTML = backBagCount;

    newBackbag.innerHTML = (backBagCount * newBackbagPrice).toFixed(2);
    oldBackbag.innerHTML = (backBagCount * oldBackbagPrice).toFixed(2);

    totalPrice += 54.99;
    total.innerHTML = `$${totalPrice.toFixed(2)}`;
  }

  if (totalPrice > 20) {
    shipping.innerHTML = `$19`;
  }
}

function backBagMinus() {
  if (backBagCount >= 1) {
    backBagCount -= 1;
    backbag.innerHTML = backBagCount;

    newBackbag.innerHTML = (backBagCount * newBackbagPrice).toFixed(2);
    oldBackbag.innerHTML = (backBagCount * oldBackbagPrice).toFixed(2);

    totalPrice -= 54.99;
    total.innerHTML = `$${totalPrice.toFixed(2)}`;
  }

  if (totalPrice < 20) {
    total.innerHTML = `0$`;
    shipping.innerHTML = `$0`;
  }
}

let newPriceShoes = 74.99;
let oldPriceShoes = 124.99;

let shoesCount = 1;
function shoesPlus() {
  if (shoesCount <= 19) {
    shoesCount += 1;
    shoes.innerHTML = shoesCount;

    newShoes.innerHTML = (shoesCount * newPriceShoes).toFixed(2);
    oldShoes.innerHTML = (shoesCount * oldPriceShoes).toFixed(2);

    totalPrice += 74.99;
    total.innerHTML = `$${totalPrice.toFixed(2)}`;
  }

  if (totalPrice > 20) {
    shipping.innerHTML = `$19`;
  }
}

function shoesMinus() {
  if (shoesCount >= 1) {
    shoesCount -= 1;
    shoes.innerHTML = shoesCount;

    newShoes.innerHTML = (shoesCount * newPriceShoes).toFixed(2);
    oldShoes.innerHTML = (shoesCount * oldPriceShoes).toFixed(2);

    totalPrice -= 74.99;
    total.innerHTML = `$${totalPrice.toFixed(2)}`;
  }

  if (totalPrice < 20) {
    total.innerHTML = `0$`;
    shipping.innerHTML = `$0`;
  }
}

//  Alert function
let message = document.querySelector("#message");
message.addEventListener("submit", alert);

function alert(event) {
  event.preventDefault();

  message.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';"
        >&times;</span
      >
      <strong>successful</strong>`;
  message.classList.add("alert");
}
