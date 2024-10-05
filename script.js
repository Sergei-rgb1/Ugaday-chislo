let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');

submitGuess.addEventListener('click', function() {
    let userGuess = parseInt(guessInput.value);

    if (userGuess > randomNumber) {
        resultMessage.textContent = 'Меньше';
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Больше';
    } else if (userGuess === randomNumber) {
        resultMessage.textContent = 'Поздравляем! Вы угадали число!';
    } else {

    }
    });