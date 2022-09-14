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

let numberOfFilms = +prompt('How many movies have you watched ?', '');
// alert(`You watched ${numberOfFilms} movies`);

let personalMovieBD = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};
let recentFilm = prompt('What was your last movie you watch ?', ''),
    rateFilm = +prompt('Rate this movie from 0 to 10 ?', '');

personalMovieBD.movies[recentFilm] = rateFilm;    
console.log(personalMovieBD.movies);