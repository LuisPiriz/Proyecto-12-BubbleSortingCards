/* eslint-disable */
import "bootstrap";
import "./style.css";

let button = document.querySelector("#button");
button.addEventListener(
  "click",
  (window.onload = function randomCard() {
    //write your code here
    const palos = ["♦", "♥", "♠", "♣"];

    let indexPalo = Math.floor(Math.random() * palos.length);

    let top = document.querySelector(".top");
    top.innerHTML = palos[indexPalo];
    // top.style.color = palos[indexPalo];

    let bot = document.querySelector(".bot");
    bot.innerHTML = palos[indexPalo];

    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      top.style.color = "red";
    } else {
      top.style.color = "black";
    }
    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      bot.style.color = "red";
    } else {
      bot.style.color = "black";
    }

    const numeros = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q",
      "A"
    ];

    let indexNumeros = Math.floor(Math.random() * numeros.length);

    let numbers = document.querySelector(".numero");
    numbers.innerHTML = numeros[indexNumeros];

    for (let i = 1; i <= 3; i++) {
      document.body.innerHTML += `<div class="card m-auto">
      <div class="card-body">
        <div class="top">${palos[indexPalo]}</div>
        <div class="numero">${numeros[indexNumeros]}</div>
        <div class="bot">${palos[indexPalo]}</div>
      </div>
    </div>`;
    }
  })
);
