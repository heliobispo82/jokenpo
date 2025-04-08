
const result = document.querySelector(".result")
const myScore = document.querySelector("#my-score")
const machineScore = document.querySelector("#machine-score")

let myScoreNumber = 0
let machineScoreNumber = 0 

const playHuman = (humanchoice) => {

    playTheGame(humanchoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("humano: " + human + "maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate &#x1F914;"
    } else if (
        (human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")
    ) {
        myScoreNumber++
        myScore.innerHTML = myScoreNumber
        result.innerHTML = "Você Ganhou &#x1F600;"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu &#x1F61D;"
    }


}