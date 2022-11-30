// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число


for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - это не четное число`);
    }
}

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);


// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
let summ = 0;

for (let i = 0; i < 5; i++)(array[i] = Math.round(Math.random() * 9));
console.log(array);

for (let i = 0; i < array.length; i++) {
    const num = array[i];
    summ += num;
}
console.log("Сумма всех чисел - " + summ);

console.log("Минимальное число - " + Math.min(...array));

console.log('В массиве ' + (array.includes(3) ? "присутствует" : "осутсвует") + ' число - 3');



// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

const arrNumber = [];

for (let i = 0; i < 10; i++)(arrNumber[i] = Math.round(Math.random() * 10));
console.log(arrNumber);

for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 === 0) {
        console.log(arrNumber[i] ** 2);
    }
}

for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 3 === 0) {
        console.log(arrNumber[i] ** 3);
    }
}




// // Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// // Подсчитайте количество цифр 3 в этом массиве.

const arrAy = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;
for (let i = 0; i < arrAy.length; i++) {
    if (arrAy[i] === 3) {
        count++;
    }
}
console.log(`В массиве цифра 3 встречается ${count} раза`);



// // Дан следующий массив:
// // [1, 2, 3, 4, 5]
// // С помощью метода массива преобразуйте его в следующий:
// // [1, 4, 5]

const arrMas = [1, 2, 3, 4, 5];
arrMas.splice(1, 2);
console.log(arrMas);