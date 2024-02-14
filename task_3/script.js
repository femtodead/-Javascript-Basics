// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function checkInputInteger(text) { // фенкция для ввода числа + проверка на целок число
    while (true) {
        let number = Number(prompt(text));
        if (Number.isInteger(number)){
           return number;
        }
        else{
            alert("Не корректный ввод целого числа введите заного");
        }
    }
}

function numberCube(num){
    console.log(num*num*num);
}




// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function taxes( number = checkInputInteger("Введите ЗП до вычета налогов") ){
    console.log(`Размер заработной платы за вычетом налогов равен ${number*0.87} руб`)
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function checkForMore(number1 = checkInputInteger("Введите первое число"),number2 = checkInputInteger("Введите второе число"),number3 = checkInputInteger("Введите третье число")) {
    if ((number1 > number2) && (number1 > number3)){ // поиск при разных значениях
        console.log(`максимальное число = ${number1}`);
    }
    else if ((number2 > number1) && (number2 > number3)){
        console.log(`максимальное число = ${number2}`);
    }
    else if ((number3 > number2) && (number3 > number1)){
        console.log(`максимальное число = ${number3}`);
    }
    else{
        if ((number1 > number2) || (number1 > number3)){ // поиск при двух одинаковых значениях
            console.log(`максимальное число = ${number1}`);
        }
        else if ((number2 > number1) || (number2 > number3)){
            console.log(`максимальное число = ${number2}`);
        }
        else if ((number3 > number2) || (number3 > number1)){
            console.log(`максимальное число = ${number3}`);
        }
        else{ // когда все равны
            console.log(`все числа одинаковые и равны = ${number3}`);
        }
    }
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum (a = checkInputInteger("Введите первое число"),b = checkInputInteger("Введите второе число")){
    console.log(`${a}+${b}=${a+b}`)
}

function diff (a = checkInputInteger("Введите первое число"),b = checkInputInteger("Введите второе число")){
    if (a >= b){
        console.log(`${a}-${b}=${a-b}`)
    }
    else{
        console.log(`${b}-${a}=${b-a}`)
    }
}

function multiplication (a = checkInputInteger("Введите первое число"),b = checkInputInteger("Введите второе число")){
    console.log(`${a}*${b}=${a*b}`)
}

function division (a = checkInputInteger("Введите первое число"),b = checkInputInteger("Введите второе число")){
    if ((a == 0) || (b == 0)){
        alert("Вводимые числа не могут быть 0")
    }
    else{
        console.log(`${a}/${b}=${a/b}`)
    } 
}

function calculator(num) { // объеденил в одну функцию
    switch(num){
        case 1: 
            sum();
            break;
        case 2: 
            diff();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            division();
            break;
        default:
            console.log(`Не допустимое значение  1 Сложение
             2 Разность
             3 Умножение
             4 Деление`) 
    }
}




function main() { // все результаты и проверки
    numberCube(checkInputInteger("Введите целое число")) // Задание 1 ;
    numberCube(2); // Задание 1 ;
    numberCube(3); // Задание 1 ;


    taxes(); // Задание 2

    checkForMore(); // Задание 3

    calculator(1); // Задание 4
    calculator(2); // Задание 4
    calculator(3); // Задание 4
    calculator(4); // Задание 4
}

main();