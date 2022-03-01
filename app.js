const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let compterChoice
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
        compterChoice = 'Rock'
    }

    if (randomNumber === 2) {
        compterChoice = 'Paper'
    }

    if (randomNumber === 3) {
        compterChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = compterChoice
}

function getResult() {
    if (compterChoice === userChoice) {
        result = "Draw!!"
    }
    if (compterChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Win!!'
    }
    if (compterChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You Win!!'
    }
    if (compterChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You Win!!'
    }
    if (compterChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You Lose!!'
    }
    if (compterChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You Lose!!'
    }
    if (compterChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You Lose!!'
    }
    resultDisplay.innerHTML = result
}