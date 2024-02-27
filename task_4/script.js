// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function whatKindNumber(number){
    if (number == 0){
        console.log(`${number} - это ноль \n`);
    } else if (number%2 == 0){
        console.log(`${number} - это четное число \n`);
    }else{
        console.log(`${number} - это не четное число \n`);
    }
}


for (let index = 0; index < 11; index++) {
    whatKindNumber(index);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]


const list = [1, 2, 3, 4, 5, 6, 7];
list.splice(3,2);
console.log(list);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

const arr = [];
let count = 0;
for (let index = 0; index < 5; index++) {
    arr.push(random(0,9));
    if (arr[index]==3){
        count++;
    }   
}
console.log(`В данном массиве [${arr}] есть ${count} троек`);