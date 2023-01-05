/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  function randomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "K",
      "Q",
      "A"
    ];

    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNumeros = Math.floor(Math.random() * numeros.length);
    let palo = palos[indexPalo]; //Aquí obtengo el palo
    let numero = numeros[indexNumeros];
    console.log(palo);
    console.log(numero);
    let carta = [palo, numero];
    console.log(carta);

    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      document.getElementById("cards").innerHTML += `<div class="card d-flex">
      <div class="card-body m-2">
        <div class="top text-danger">${palos[indexPalo]}</div>
        <div class="numero text-danger">${numeros[indexNumeros]}</div>
        <div class="bot text-danger">${palos[indexPalo]}</div>
      </div>
    </div>`;
    } else {
      document.getElementById("cards").innerHTML += `<div class="card d-flex">
      <div class="card-body m-2">
        <div class="top">${palos[indexPalo]}</div>
        <div class="numero">${numeros[indexNumeros]}</div>
        <div class="bot">${palos[indexPalo]}</div>
      </div>
    </div>`;
    }
    return carta;
  }

  let todascartas = [];

  function variasCartas(n) {
    document.getElementById("cards").innerHTML = "";
    for (let i = 1; i <= input.value; i++) {
      let newCard = randomCard();
      todascartas.push(newCard);
    }
  }

  document.getElementById("button").addEventListener("click", () => {
    let tomavalor = document.getElementById("input");
    variasCartas(tomavalor.value);
  });

  let sort = document.getElementById("button2");
  // sort.addEventListener("click", bubbleSort);
  let bubble = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  // document.getElementById("button2").addEventListener("click", () => {
  //   let tomavalor2 = bubble;
  //   bubbleSort(tomavalor2);
  // });

  const bubbleSort = arr => {
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        if (arr[index] > arr[index + 1]) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }
    return arr;
  };
};
