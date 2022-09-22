"use strict";

// let number = 5;
// const leftBorderWisth = 1;
// number = 10;
// console.log(number);

// let obj = {
//   name: 'Kostia',
//   surname: 'Melnyk',
//   married: true,
//   age: 26
// };

// let name = prompt('Your name', '');
// // let name = 'Kostia';
// alert(`Hello ${name}!`);
// // answers[1] = prompt('Your surname', '');
// let age = +prompt('Your age', '');
// if (age >= 18) {
//   alert('You can enter')
// } else {
//   alert('You can not enter')
// };

// let a = 10,
//     b = 10;

// console.log(++a);
// console.log(a);

// let name = false;
// console.log(!name);

// const bargeOne = [4, 1, 3],
//       bargeTwo = [4, 0, 1, 3];

// function loadGrain(levels) {
//     let sum = 0;

//     for(let i = 0; i < levels.length; i++){
//         sum += levels[i];
//     }
//     return sum;
// };


// console.log(loadGrain(bargeOne));
// console.log(loadGrain(bargeTwo));

// let recentFilm = prompt('What was your last movie you watch ?', ''),
//     rateFilm = +prompt('Rate this movie from 0 to 10 ?', '');

// personalMovieBD.movies[recentFilm] = rateFilm;    
// console.log(personalMovieBD.movies);

// let num = 51;

// if (num < 49) {
//   console.log("Num < 49")
// } else if (num == 50) {
//   console.log('Num = 50')
// } else if (num > 50) {
//   console.log('Num > 50')
// };

// if (num == 49) {
//   console.log("Num = 49")
// } else {
//   console.log('Num is not 49')
// };

// (num == 49) ? console.log("Num = 49") : console.log('Num is not 49');

// let num = 52;

// switch (num) {
//   case 50:
//     console.log("Num = 49");
//     break;
//   case 51:
//     console.log("Num = 51");
//     break;

//   default:
//     console.log("Num is not found");
//     break;
// };

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } else {
//   console.log('not done!')
// };

// ====== Creating a * tree

// let result = '';
// let length = 7;

// for (let i = 1; i < 7; i++) {
  
//   for (let j = 0; j < i; j++) {
//     result += "*"
//   };
//   result += '\n'
// };
// console.log(result);

// first: for (let i = 1; i <= 3; i++) { // first: это метка
//   console.log(`Year: ${i}`)

//   for (let j = 1; j <= 4; j++) {
//     console.log(`Month: ${j}`)
    
//     for (let k = 1; k <= 10; k++) {
//       if (k === 5) break first;     // здесь мы указывает метку и это значит что break должент остановить главный цыкл
//       console.log(`Day: ${k}`)
      
//     }
//   }
// }

// for (let i = 5; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 20; i >= 10; i--) {
//   if (i === 13) break;
//   console.log(i)
// };

// for (let i = 1; i <= 10; i++) { // выводит только парные числа
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++
//     continue;
// } else {
//     console.log(i);
// }
// i++
// }

// let arr = []; 
// let num = 0;

// for (let i = 5; i <= 10; i++) {
//   arr[num++] = i;
// }

// // arr[0] = 1;
// // arr[1] = 2;

// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50]; // добавление данных одного массива в другой
// const result = [];

// // result[0] = arr[0]; // добавление в массив result значения из arr
// // console.log(result);

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
// // end добавление данных одного массива в другой

// const data = [5, 10, 'Shopping', 20, 'Homework']; // Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".

// // data[0] = data[0] * 2;
// // console.log(data[0]);
// // data[2] = data[2] += ' - done';
// // console.log(data[2]);
// // console.log(typeof data[0]);

// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === 'number') {
//     data[i] = data[i] * 2;
    
//   } else if (typeof data[i] === 'string') {
//     data[i] = data[i] += ' - done';
//   }
// };
// console.log(data)
// // end tast

// const data = [5, 10, 'Shopping', 20, 'Homework']; // записать в result масив data наоборот
// const result = [];
// let resultStart = 0;

// for (let i = data.length - 1; i >= 0; i--) {
//   result[resultStart++] = data[i];
// }
// console.log(result);
// // end записать в result масив data наоборот



// let numberOfFilms = +prompt('How many movies have you watched ?', '');

// let personalMovieBD = {
//   'count': numberOfFilms,
//   'movies': {},
//   'actors': {},
//   'genres': [],
//   'privat': false
// };

// if (numberOfFilms < 10) {
//   alert('Просмотрено мало фильмов');
// } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//   alert('Вы классический зритель');
// } else if (numberOfFilms >= 30) {
//   alert('Вы киноман');
// } else {
//   alert('Ошибка');
// }


// for (let i = 1; i <= 2; i++) {
//   let recentFilm = prompt('What was your last movie you watch ?', ''),
//       rateFilm = +prompt('Rate this movie from 0 to 10 ?', '');

//   if (recentFilm != null && rateFilm != null && recentFilm != '' && rateFilm != '' && recentFilm.length < 50) {
//     personalMovieBD.movies[recentFilm] = rateFilm;
//   } else {
//     i--;
//   }
// }



// let first = +prompt('Enter number', ''),
//     second = +prompt('Enter number two', '');

// function showMessage(number, number2) {
//   alert(`Sum = ${number * number2}`);
//   return number * number2;
// }

// let summ = showMessage(first, second);
// let discount = 0.9;

// function discountSum (summ, discount) {
//   return summ * discount;
// };
// let totalDiscount = discountSum(summ, discount);
// console.log(totalDiscount);


// showMessage(first, second);

// let calc = (num1, num2) => num1 + num2; // стрелочная функция
// alert(calc(first, second));

// let userName = prompt('Enter your name', '');
// function sayHello(name) {
//   alert(`Hello, ${name}!`)
// }

// sayHello(userName);

// let arr = [];

// function returnNeighboringNumbers(number) {
//   for (let i = -1; i < 2; i++) {
//     arr[i + 1] = i + number;
//   }
//   return arr
// }

// console.log(returnNeighboringNumbers(5));

// let num1 = 3;
// let num2 = '3';

// function getMathResult(num1, num2) {
//   if (typeof(num2) !== 'number' || num2 <= 0) {
//     return num1;
//   }

//   let result = '';
//   for (let i = 1; i <= num2; i++) {
//     if (i < num2) {
//       result += `${num1 * i}---`;
//     } else {
//       result += `${num1 * i}`;
//     }
//   }
//   return result;
// }

// ===================== Functions ==================

// let numberOfFilms;
// alert(`You watched ${numberOfFilms} movies`);
// let personalMovieBD = {
//   'count': numberOfFilms,
//   'movies': {},
//   'actors': {},
//   'genres': [],
//   'privat': false
// };

// function start() {
//   numberOfFilms = +prompt('How many movies have you watched ?', '');
//   while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//     alert('Enter number of movies');
//     numberOfFilms = +prompt('How many movies have you watched ?', '');
//   }
// }
// start();

// function rememberMyFilms() {
//   for (let i = 1; i <= 2; i++) {
//     let recentFilm = prompt('What was your last movie you watch ?', ''),
//         rateFilm = +prompt('Rate this movie from 0 to 10 ?', '');

//     if (recentFilm != null && rateFilm != null && recentFilm != '' && rateFilm != '' && recentFilm.length < 50) {
//       personalMovieBD.movies[recentFilm] = rateFilm;
//     } else {
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (numberOfFilms < 10) {
//     alert('Просмотрено мало фильмов');
//   } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//     alert('Вы классический зритель');
//   } else if (numberOfFilms >= 30) {
//     alert('Вы киноман');
//   } else {
//     alert('Ошибка');
//   }
// }
// detectPersonalLevel()

// function showMyBd(hidden) {
//   if (!hidden) {
//     console.log(personalMovieBD)
//   }
// }
// showMyBd(personalMovieBD.privat);

// function writeYourGeners() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieBD.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`);
//   }
// }
// writeYourGeners();

// ===================== END Functions ==================

// function getCoupeNumber(seatNumber) {
//   if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//       return "Ошибка. Проверьте правильность введенного номера места";
//   }

//   if (seatNumber === 0 || seatNumber > 36) {
//       return "Таких мест в вагоне не существует";
//   }

//   return Math.ceil(seatNumber / 4);
//   // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(33);


// функция которая преобразует число во время
// function getTimeFromMinutes(number) {

//   if (typeof(number) !== 'number' || number < 0 || !Number.isInteger(number)) {
//     return "Ошибка, проверьте данные";
//   }

//   const hour = 60;
//   let str = 'Это';
//   if (number > 59) {
//     let minutes = number - (Math.floor(number / hour) * hour); // выводит столько минут c вычетом часов
//     let countOfHours = Math.floor(number / hour);// выводит сколько полных часов 1,2,3...
//     const lastDigit = countOfHours % 10; // определяет последнюю цифру числа
//     if (lastDigit === 1) {
//       str += (` ${countOfHours} час`)
//     } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4){
//       str += (` ${countOfHours} часа`)
//     } else {
//       str += (` ${countOfHours} часов`)
//     }
//   };

//   if (number > 0) {
//     let minutes = number - (Math.floor(number / hour) * hour); // выводит столько минут c вычетом часов
//     const lastDigit = minutes % 10;
//     if (lastDigit === 1) {
//       str += (` ${minutes} минута`)
//     } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4){
//       str += (` ${minutes} минуты`)
//     } else if (minutes === 0) {
//       str += '';
//     } else {
//       str += (` ${minutes} минут`)
//     }
//   } 
//   return str;
// }

// console.log(getTimeFromMinutes(60));

// функция которая выводит самое большое число
// function findMaxNumber(first, second, third, forth) {
//   // первое решение
//   let arr = [first, second, third, forth];
//   let bigNumber = Math.max(...arr);
//   // return bigNumber;
//   // второе решение
//   return Math.max(first, second ,third, forth);
// }
// console.log(findMaxNumber(1, 22.5, 3, 4))



// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел
// числа Фибоначчи

// function fib(num) {
//   if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//       return "";
//   }

//   let result = '';
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//       if (i + 1 === num) {
//           result += `${first}`;
//           // Без пробела в конце
//       } else {
//           result += `${first} `; // 0, 1, 1, 2, 3, 5, 8     
//       }

//       let third = first + second; // 1, 2, 3, 5, 8, 13, 21   
//       first = second; // 1, 1, 2, 3, 5, 8, 13    
//       second = third; // 1, 2, 3, 5, 8, 13, 21    
//   }

//   return result;
// }
// console.log(fib(7));

// callback функция
// function reallyDone() {
//   console.log(`I'm really done`);
// }

// function done() {
//   console.log(`I'm done`);
// }
// function learnJS(lang, callback, callback2) {
//   console.log(`I'm learning ${lang}`);
//   callback();
//   callback2();
// }
// learnJS('JavaScript', done, reallyDone);

// let obj = {
//   count: 1,
//   movies: ['Lola', 'Kola', 'Mola'],
//   actors: {
//     name: 'Kostia',
//     surname: 'Melnyk'
//   },
//   genres: [],
//   privat: false
// };
// let counter = 0;
// for (let key in obj) { // цикл который перебирает ключи в obj
//   console.log(`Key ${key} Conditon ${obj[key]}`); // выводит ключи и значение
//   counter++
// };

// let {name, surname} = obj.actors;
// console.log(name);

// // console.log(obj['count']);

// let arr = [1, 2, 4, 5, 10, 25];

// arr.forEach(function(value, key){
//   console.log(`${value * key}`)
// }); 
// arr.pop();
// console.log(arr);

let arr = [1, 2, 4, 5, 10, 25, 45, 47, 54, 59, 66, 70, 75];

function binerySearch (item, list) {
  let low = 0,
      high = list.length - 1,
      mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];
    if (guess === item) return mid;
    else if (guess > item) high = mid - 1 
    else low = mid + 1
  }
}

console.log(binerySearch(1, arr));

