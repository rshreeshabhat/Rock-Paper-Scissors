const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }

    if (randomNumber === 4) {
        computerChoice = 'Lizard'
    }

    if (randomNumber === 5) {
        computerChoice = 'Spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw!!"
        document.getElementById("game-container").style.backgroundColor = "white";
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Lizard' && userChoice === 'Paper') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Spock' && userChoice === 'Rock') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Rock' && userChoice === 'Lizard') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Paper' && userChoice === 'Spock') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Scissors' && userChoice === 'Lizard') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Lizard' && userChoice === 'Spock') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Spock' && userChoice === 'Scissors') {
        result = 'You Win!!'
        document.getElementById("game-container").style.backgroundColor = "green";
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Lizard' && userChoice === 'Rock') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Spock' && userChoice === 'Lizard') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Rock' && userChoice === 'Spock') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Paper' && userChoice === 'Lizard') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Scissors' && userChoice === 'Spock') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Lizard' && userChoice === 'Scissors') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    if (computerChoice === 'Spock' && userChoice === 'Paper') {
        result = 'You Lose!!'
        document.getElementById("game-container").style.backgroundColor = "red";
    }
    resultDisplay.innerHTML = result
}