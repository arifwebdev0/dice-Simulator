const buttonEl = document.querySelector("#roll-button");

const diceEl = document.querySelector("#dice img");

const rollHistoryEl = document.querySelector("#roll-history")

let historyList = [];   

function rollDice(){
    const rollResult = Math.floor(Math.random() *6) 
    +1;
    const diceFace = getDiceFace(rollResult);
    console.log(diceFace);
     diceEl.src = diceFace;
     historyList.push(rollResult);
     updateRollHistory();
}

function updateRollHistory(){
    rollHistoryEl.innerHTML= "";
     for (let i = 0; i < historyList.length; i++) {

        const listItem = document.createElement("li");

        listItem.innerHTML = `
            Roll ${i + 1}:
            <span>
                <img class="diceimghistory" src="${getDiceFace(historyList[i])}">
            </span>
        `;

        rollHistoryEl.appendChild(listItem);
    }
}

function getDiceFace (rollResult){
    switch(rollResult){
       case 1:
            return "./Assets/images/dice1.png";

        case 2:
            return "./Assets/images/dice2.png";

        case 3:
            return "./Assets/images/dice3.png";

        case 4: 
            return "./Assets/images/dice4.png";

        case 5:
            return "./Assets/images/dice5.png";

        case 6:
            return "./Assets/images/dice6.png";
            default:
                return "";
    }
}

buttonEl.addEventListener("click", ()=>{
   diceEl.classList.add("roll-animation")
   setTimeout(()=>{ diceEl.classList.remove("roll-animation");
    rollDice()
   }, 1000);
});

