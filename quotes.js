let quotes = [
"``A bug is never just a mistake. It represents something bigger. An error of thinking, that makes you who you are.´´",
"``No great mind has lived without a touch of madness.´´",
"``Give a man a truth, and he will think for a day. Give a man reason, and he will think for a lifetime.´´",
"``Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.´´",
"``What, so everyone's supposed to sleep every single night now?´´",
"``Loneliness is often the byproduct of a gifted mind.´´",
"``If you reveal your secrets to the wind, you should not blame the wind for revealing them to the trees.´´",
"``If privacy is outlawed, only outlaws will have privacy.´´",
"``Is evil something you are? Or is it something you do?´´",
"``Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.´´",
"``Physics is like sex: sure, it may give some practical results, but that's not why we do it.´´",
"``I learned very early the difference between knowing the name of something and knowing something.´´"
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
document.getElementById("quote").textContent=quotes[getRandomIntInclusive(0,quotes.length-1)];



