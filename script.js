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
  convertedNumFeet = mainNumber * 3.28084;
  convertedNumMeter = mainNumber * 0.3048;
  meterSentence.textContent = `${mainNumber} meters = ${convertedNumFeet.toFixed(
    3
  )} feet | ${mainNumber} feet = ${convertedNumMeter.toFixed(3)} meters`;
}

function literGal() {
  convertedNumGal = mainNumber * 0.264172;
  convertedNumLit = mainNumber * 3.78541;
  literGalSentence.textContent = `${mainNumber} liters = ${convertedNumGal.toFixed(
    3
  )} gallons | ${mainNumber} gallons = ${convertedNumLit.toFixed(3)} liters`;
}
function kiloPounds() {
  convertedNumPounds = mainNumber * 2.20462;
  convertedNumKilo = mainNumber * 0.453592;
  kiloPoundSentence.textContent = `${mainNumber} liters = ${convertedNumPounds.toFixed(
    3
  )} pounds | ${mainNumber} pounds = ${convertedNumKilo.toFixed(3)} kilos`;
}

// Function calls
meterFeet();
literGal();
kiloPounds();
