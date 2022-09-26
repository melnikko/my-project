"use strict";

// ===================== Functions ==================

// let numberOfFilms = 0;
// // alert(`You watched ${numberOfFilms} movies`);


// function start() {
//   numberOfFilms = +prompt('How many movies have you watched ?', '');
//   while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//     alert('Enter number of movies');
//     numberOfFilms = +prompt('How many movies have you watched ?', '');
//   }
// }
// start();

// let personalMovieBD = {
//   'count': numberOfFilms,
//   'movies': {},
//   'actors': {},
//   'genres': [],
//   'privat': false
// };

// function rememberMyFilms() {
//   for (let i = 1; i <= 2; i++) {
//     let recentFilm = prompt('What was your last movie you watch ?', '').trim(),
//         rateFilm = +prompt('Rate this movie from 0 to 10 ?', '');

//     if (recentFilm != null && rateFilm != null && recentFilm != '' && rateFilm != '' && recentFilm.length < 50) {
//       personalMovieBD.movies[recentFilm] = rateFilm;
//     } else {
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel(films) {
//   if (films < 10) {
//     alert('Просмотрено мало фильмов');
//   } else if (films >= 10 && films < 30) {
//     alert('Вы классический зритель');
//   } else if (films >= 30) {
//     alert('Вы киноман');
//   } else {
//     alert('Ошибка');
//   }
// }
// detectPersonalLevel(numberOfFilms);

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


// ===================== Upgrated Functions ==================

let personalMovieBD = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieBD.count = +prompt('How many movies have you watched ?', '');
    while (personalMovieBD.count == '' || personalMovieBD.count === null || isNaN(personalMovieBD.count)) {
      alert('Enter number of movies');
      personalMovieBD.count = +prompt('How many movies have you watched ?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 1; i <= 2; i++) {
      let recentFilm = prompt('What was your last movie you watch ?', '').trim(),
          rateFilm = +prompt('Rate this movie from 0 to 10 ?', '');
  
      if (recentFilm != null && rateFilm != null && recentFilm != '' && rateFilm != '' && recentFilm.length < 50) {
        personalMovieBD.movies[recentFilm] = rateFilm;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function(films) {
    if (films < 10) {
      alert('Просмотрено мало фильмов');
    } else if (films >= 10 && films < 30) {
      alert('Вы классический зритель');
    } else if (films >= 30) {
      alert('Вы киноман');
    } else {
      alert('Ошибка');
    }
  },
  showMyBd: function(hidden) {
    if (!hidden) {
      console.log(personalMovieBD)
    }
  },
  writeYourGeners: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр по номером ${i}`);

      if (genre === null || genre === '') {
        alert(`Напишите жанр`);
        i--
      } else {
        personalMovieBD.genres[i - 1] = genre;
      }
    }
    personalMovieBD.genres.forEach((element, i) => {
      console.log(`Любимый жанр номер ${i + 1} - это ${element}/n`);
    });
  },
  toggleVisibleMyBD: function() {
    (this.privat === false) ? this.privat = true : this.privat = false;
  }
};

personalMovieBD.writeYourGeners();