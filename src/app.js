/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let todascartas = [];

  function randomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [
      "A",
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
      "Q"
    ];
    const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNumeros = Math.floor(Math.random() * numeros.length);
    let palo = palos[indexPalo]; //Aquí obtengo el palo
    let numero = numeros[indexNumeros];
    let valor = valores[indexNumeros];
    // console.log(palo);
    // console.log(numero);
    let carta = [palo, numero, valor];
    // console.log(carta);

    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      document.getElementById("cards").innerHTML += `<div class="card d-flex">
      <div class="card-body m-2">
        <div class="top text-danger" id="top">${palos[indexPalo]}</div>
        <div class="numero text-danger" id="numero">${numeros[indexNumeros]}</div>
        <div class="bot text-danger" id="bot">${palos[indexPalo]}</div>
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

  function variasCartas() {
    document.getElementById("cards").innerHTML = "";
    for (let i = 1; i <= input.value; i++) {
      let newCard = randomCard();
      todascartas.push(newCard);
    }
  }
  // console.log(todascartas);
  // Boton para mostrar las cartas con el input
  document.getElementById("button").addEventListener("click", () => {
    let tomavalor = document.getElementById("input");
    variasCartas(tomavalor.value);
  });

  // Boton para ordenar
  let sort = document.getElementById("button2");
  sort.addEventListener("click", function() {
    bubbleSort([todascartas]);
  });

  const bubbleSort = todascartas => {
    console.log("A ver: " + todascartas);

    todascartas = todascartas[0];
    let wall = todascartas.length - 1;
    document.getElementById("cards").innerHTML = ``; //iniciamos el wall o muro al final del todascartasay

    console.log("A ver otra cosa: " + wall);
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        let cosa1 = todascartas[index];
        let cosa2 = todascartas[index + 1];
        console.log(cosa1);
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        if (parseInt(cosa1[2]) > parseInt(cosa2[2])) {
          let aux = todascartas[index];
          todascartas[index] = todascartas[index + 1];
          todascartas[index + 1] = aux;
        }
        console.log("A ver si ordena: " + todascartas);
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }
    // return todascartas;

    while (todascartas.length > 0) {
      let malditasCartas = todascartas[0];
      todascartas.shift();
      let paloCarta = malditasCartas[0];

      if (paloCarta[0] == "♥" || paloCarta[0] == "♦") {
        document.getElementById("cards").innerHTML += `<div class="card d-flex">
          <div class="card-body m-2">
            <div class="top text-danger">${malditasCartas[0]}</div>
            <div class="numero text-danger">${malditasCartas[1]}</div>
            <div class="bot text-danger">${malditasCartas[0]}</div>
          </div>
        </div>`;
      } else {
        document.getElementById("cards").innerHTML += `<div class="card d-flex">
          <div class="card-body m-2">
            <div class="top">${malditasCartas[0]}</div>
            <div class="numero">${malditasCartas[1]}</div>
            <div class="bot">${malditasCartas[0]}</div>
          </div>
        </div>`;
      }
    }
  };
};
