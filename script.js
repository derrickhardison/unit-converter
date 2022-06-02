mainNumber = +document.getElementById("main-number").textContent;
numFeet = document.getElementById("num-feet");
meterSentence = document.getElementById("meter-feet-sentence");

console.log(mainNumber);
console.log(meterSentence.textContent);

// mainNumber.textContent = "";

// 1 meter = 3.280 foot
let convertedNumFeet = 0;
let convertedNumMeter = 0;
function meterFeet() {
  convertedNumFeet = mainNumber * 3.281;
  convertedNumMeter = mainNumber * 0.304;
  // numFeet.textContent = convertedNumFeet;

  meterSentence.textContent = `${mainNumber} meters = ${convertedNumFeet} | ${mainNumber} feet = ${convertedNumMeter} meters`;
}
meterFeet();
console.log(convertedNumFeet);
