let quotes = [
"``A bug is never just a mistake. It represents something bigger. An error of thinking, that makes you who you are.´´",
"``No great mind has lived without a touch of madness.´´",
"``Give a man a truth, and he will think for a day. Give a man reason, and he will think for a lifetime.´´",
"``Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.´´",
"``What, so everyone's supposed to sleep every single night now?´´",
"``Loneliness is often the byproduct of a gifted mind.´´"
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
document.getElementById("quote").textContent=quotes[getRandomIntInclusive(0,quotes.length-1)];



