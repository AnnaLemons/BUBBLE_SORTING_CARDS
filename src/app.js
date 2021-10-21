/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const ROW = document.querySelector(".row");
const DECK = document.querySelector("#number");
const FORM = document.querySelector("form");
const BUTTON = document.querySelector("#bubble");

const SUITS = ["♦", "♥", "♠", "♣"];
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let cards = [];
//EVENTS
FORM.addEventListener("submit", event => {
  event.preventDefault();
  ROW.innerHTML = "";
  cards = [];

  for (let i = 0; i < DECK.value; i++) {
    cards.push(getCard());
  }

  drawCards(cards);
  console.log(cards);
});

BUTTON.addEventListener("click", event => {
  event.preventDefault();

  let len = cards.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (cards[j - 1].value > cards[j].value) {
        let tmp = cards[j - 1].value;
        cards[j - 1].value = cards[j].value;
        cards[j].value = tmp;
      }
    }
  }
  ROW.innerHTML = "";
  drawCards(cards);
});
//FUNCTIONS
function getCard() {
  return {
    value: VALUES[getRandom(VALUES)],
    suit: SUITS[getRandom(SUITS)]
  };
}

function getRandom(list) {
  return Math.floor(Math.random() * list.length);
}
//DRAW CARD
function drawCards(cards) {
  for (const card of cards) {
    let cardBody = document.createElement("div");
    cardBody.classList.add("card");
    ROW.appendChild(cardBody);

    let iconHeart = document.createElement("div");
    iconHeart.classList.add("iconHeart");
    let iconText = document.createTextNode(card.suit); // (It's avar no "".)
    iconHeart.appendChild(iconText);
    cardBody.appendChild(iconHeart);

    let numberElement = document.createElement("div");
    numberElement.classList.add("numberElement");
    let numberText = document.createTextNode(card.value);
    numberElement.appendChild(numberText);
    cardBody.appendChild(numberElement);

    let inverseElement = document.createElement("div");
    inverseElement.classList.add("inverseElement");
    let inverseText = document.createTextNode(card.suit);
    inverseElement.appendChild(inverseText);
    cardBody.appendChild(inverseElement);
    //CONDITIONAL
    if (card.suit == "♥" || card.suit == "♦") {
      iconHeart.classList.add("red");
      inverseElement.classList.add("red");
      numberElement.classList.add("red");
    } else {
      iconHeart.classList.add("black");
      inverseElement.classList.add("black");
      numberElement.classList.add("black");
    }
  }
}
