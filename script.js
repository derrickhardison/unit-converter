// DOM Variables
mainNumber = document.getElementById("main-number");
numFeet = document.getElementById("num-feet");
meterSentence = document.getElementById("meter-feet-sentence");
literGalSentence = document.getElementById("liter-gal-sentence");
kiloPoundSentence = document.getElementById("kilo-pound-sentence");
submitBtn = document.getElementById("submitBtn");
errorMsg = document.getElementById("errorMsg");

// Variables
let convertedNumFeet = 0;
let convertedNumMeter = 0;

let convertedNumGal = 0;
let convertedNumLit = 0;

let convertedNumPounds = 0;
let convertedNumKilo = 0;

// Functions
function meterFeet() {
  convertedNumFeet = mainNumber.value * 3.28084;
  convertedNumMeter = mainNumber.value * 0.3048;
  meterSentence.textContent = `${
    mainNumber.value
  } meters = ${convertedNumFeet.toFixed(3)} feet | ${
    mainNumber.value
  } feet = ${convertedNumMeter.toFixed(3)} meters`;
}

function literGal() {
  convertedNumGal = mainNumber.value * 0.264172;
  convertedNumLit = mainNumber.value * 3.78541;
  literGalSentence.textContent = `${
    mainNumber.value
  } liters = ${convertedNumGal.toFixed(3)} gallons | ${
    mainNumber.value
  } gallons = ${convertedNumLit.toFixed(3)} liters`;
}
function kiloPounds() {
  convertedNumPounds = mainNumber.value * 2.20462;
  convertedNumKilo = mainNumber.value * 0.453592;
  kiloPoundSentence.textContent = `${
    mainNumber.value
  } liters = ${convertedNumPounds.toFixed(3)} pounds | ${
    mainNumber.value
  } pounds = ${convertedNumKilo.toFixed(3)} kilos`;
}

// Event Listeners
submitBtn.addEventListener("click", function () {
  if (mainNumber.value === "") {
    errorMsg.textContent = "Please enter a number";
  } else {
    meterFeet();
    literGal();
    kiloPounds();
    mainNumber.value = "";
    errorMsg.textContent = "";
  }
});
