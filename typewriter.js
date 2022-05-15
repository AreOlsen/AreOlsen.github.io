const myName = "Simon Brown."
let interval = 0;
let startText = "";
setInterval(() => {
    if(startText.length == myName.length) return;
    startText+=myName[interval];
    document.getElementById("name").textContent=startText;
    interval++;
}, 175);
