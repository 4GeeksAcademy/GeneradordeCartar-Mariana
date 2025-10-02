import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
 // Posibles valores y palos
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const suits = [
  { symbol: "♥", color: "red" },
  { symbol: "♦", color: "red" },
  { symbol: "♣", color: "black" },
  { symbol: "♠", color: "black" }
];

// Referencias a elementos HTML
const cardEl = document.getElementById('card');
const topSuit = document.getElementById('top-suit');
const bottomSuit = document.getElementById('bottom-suit');
const valueEl = document.getElementById('card-value');
const newBtn = document.getElementById('new-card-btn');
const widthInput = document.getElementById('card-width');
const heightInput = document.getElementById('card-height');
const applyBtn = document.getElementById('apply-size');
const autoCheckbox = document.getElementById('auto-refresh');

let intervalId = null;

// Función que genera una carta aleatoria
function generateCard() {
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  valueEl.textContent = randomValue;
  topSuit.textContent = randomSuit.symbol;
  bottomSuit.textContent = randomSuit.symbol;

  // Cambiar color
  valueEl.style.color = randomSuit.color;
  topSuit.style.color = randomSuit.color;
  bottomSuit.style.color = randomSuit.color;
}

// Botón nueva carta
if (newBtn) {
  newBtn.addEventListener('click', generateCard);
}

// Botón aplicar tamaño
if (applyBtn) {
  applyBtn.addEventListener('click', () => {
    const w = Math.max(50, parseInt(widthInput.value, 10) || 150);
    const h = Math.max(80, parseInt(heightInput.value, 10) || 220);
    cardEl.style.width = w + 'px';
    cardEl.style.height = h + 'px';

    // Ajustar tamaños proporcionalmente
    valueEl.style.fontSize = Math.round(h * 0.29) + 'px';
    topSuit.style.fontSize = Math.round(h * 0.11) + 'px';
    bottomSuit.style.fontSize = Math.round(h * 0.11) + 'px';
  });
}

// Auto-refresh cada 10s
if (autoCheckbox) {
  autoCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
      generateCard();
      intervalId = setInterval(generateCard, 10000);
    } else {
      clearInterval(intervalId);
    }
  });
}

// Generar la primera carta al cargar
generateCard();

};
