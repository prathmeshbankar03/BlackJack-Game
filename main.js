const firstCard = getRandom()
const secondCard = getRandom()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true 
let out = false
let result = ""

let stat = document.getElementById("status")
let msg = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("cards")
let moneyEl = document.getElementById("money")

let WON = document.getElementById("won")
let LOST = document.getElementById("lost")

var session

let player = {
    Name: localStorage.getItem("plyname"),
    chips: 150
}

moneyEl.textContent = player.Name + ":  $" + player.chips



function getRandom(){
    let num = Math.floor(Math.random()*13)+1

    if(num === 1){return 11}
    else if(num > 10){return 10}
    else{return num}
}

function startGame(){
    if(isAlive === true){
        session = 1
        stat.textContent = "Game Started !!! ⏳" 

        if(sum<21){ result = "Do you want to draw another card ? 🙂"; isAlive = true; }
        else if (sum === 21) { result = "Wohoo! You've Won BLACKJACK 🥳" ; hasBlackJack = true; isAlive = false; } 
        else { result = "You're out of the game 😭"; isAlive = false;}

        cardEl.textContent = "Cards: "
        if(hasBlackJack === true){
            player.chips += 100
            moneyEl.textContent = player.Name + ":  $" + player.chips 
            WON.textContent += "+ 100"
        }
        else if(isAlive === false){
            player.chips -= 100
            moneyEl.textContent = player.Name + ":  $" + player.chips
            LOST.textContent += "- 100"
        }


        for(let i=0;i<cards.length;i++){
            cardEl.textContent += cards[i] + " "
        }

        sumEl.textContent = "Sum:  " + sum

        msg.textContent = result 
    }
}

function newCard(){
    if(session === 1 && isAlive === true){
        const newCard = getRandom()
        cards.push(newCard)
        sum += newCard
        
        startGame()
    }
    else if(session !== 1){
        stat.textContent = "First, Start the game !!! ✋"
    }


}
