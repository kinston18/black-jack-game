let firstCard = 16
let secondCard = 5

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true



function start(){
if(sum<=20){
    console.log("Do you want to draw a new card?")
}
else if(sum === 21){
    console.log("Wohooo! You've got Blackjack! ")
    hasBlackJack= true
}
else {
    console.log("You're out of the game!!")
    isAlive = false
}
console.log(message)

}