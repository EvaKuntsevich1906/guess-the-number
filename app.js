const randomValue = Math.floor(Math.random() * 100);

// function guessTheNumber (randomValue_) {
//     let clientValue = +prompt("Введите целое число от 1 до 100"); 

//     if (clientValue>randomValue_) {
//         alert("Ваше число больше числа,которое загадал компьютер.  Введите число повторно")
//         return guessTheNumber(randomValue_)
//     } else if  (clientValue <randomValue_) {
//          alert("Ваше число меньше числа, которое загадал компьютер.  Введите число повторно") 
//          return guessTheNumber(randomValue_)
//     } else {
//          return alert("Отлично! Вы угадали рандомное число!")

//     }
// }

// let start = guessTheNumber(randomValue)
function guessTheNumber() {
    let start = 0;
    let end = 100;

    for (let i = start; i < end; i++) {
        let middle = prompt(`Введите среднее число от ${start} до ${end}`)

        if (middle == randomValue) {
            alert(`Отлично, вы угадали число , оно равно  ${randomValue}`);
            break
        } else if (middle > randomValue) {
            end = middle
            alert("Введеннное вами число больше, чем число которое загадал компьютер")
        } else if (middle < randomValue) {
            start = middle
            alert("Введеннное вами число меньше, чем число которое загадал компьютер")
        }
    }

}

guessTheNumber(randomValue)