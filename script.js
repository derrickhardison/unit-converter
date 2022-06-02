// DOM Variables
mainNumber = +document.getElementById("main-number").textContent;
numFeet = document.getElementById("num-feet");
meterSentence = document.getElementById("meter-feet-sentence");
literGalSentence = document.getElementById("liter-gal-sentence");
kiloPoundSentence = document.getElementById("kilo-pound-sentence");

// Variables
let convertedNumFeet = 0;
let convertedNumMeter = 0;

let convertedNumGal = 0;
let convertedNumLit = 0;

let convertedNumPounds = 0;
let convertedNumKilo = 0;

// Functions
function meterFeet() {
  convertedNumFeet = mainNumber * 3.281;
  convertedNumMeter = mainNumber * 0.304;
  meterSentence.textContent = `${mainNumber} meters = ${convertedNumFeet} feet | ${mainNumber} feet = ${convertedNumMeter} meters`;
}

function literGal() {
  convertedNumGal = mainNumber * 0.264;
  convertedNumLit = mainNumber * 3.785;
  literGalSentence.textContent = `${mainNumber} liters = ${convertedNumGal} gallons | ${mainNumber} gallons = ${convertedNumLit} liters`;
}
function kiloPounds() {
  convertedNumPounds = mainNumber * 2.204;
  convertedNumKilo = mainNumber * 0.453;
  kiloPoundSentence.textContent = `${mainNumber} liters = ${convertedNumPounds} pounds | ${mainNumber} pounds = ${convertedNumKilo} kilos`;
}

// Function calls
meterFeet();
literGal();
kiloPounds();
