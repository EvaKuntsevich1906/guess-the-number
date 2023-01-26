const randomValue = Math.floor(Math.random()*100); 

function guessTheNumber (randomValue_) {
    let clientValue = +prompt("Введите уелое число от 1 до 100"); 

    if (clientValue>randomValue_) {
        alert("Ваше число больше числа,которое загадал компьютер.  Введите число повторно")
        return guessTheNumber(randomValue_)
    } else if  (clientValue <randomValue_) {
         alert("Ваше число меньше числа, которое загадал компьютер.  Введите число повторно") 
         return guessTheNumber(randomValue_)
    } else {
         return alert("Отлично! Вы угадали рандомное число!")
        
    }
}

let start = guessTheNumber(randomValue)