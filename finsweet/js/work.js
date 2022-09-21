"use strict";

// ===================== Functions ==================

let numberOfFilms = 0;
// alert(`You watched ${numberOfFilms} movies`);


function start() {
  numberOfFilms = +prompt('How many movies have you watched ?', '');
  while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    alert('Enter number of movies');
    numberOfFilms = +prompt('How many movies have you watched ?', '');
  }
}
start();

let personalMovieBD = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};

function rememberMyFilms() {
  for (let i = 1; i <= 2; i++) {
    let recentFilm = prompt('What was your last movie you watch ?', '').trim(),
        rateFilm = +prompt('Rate this movie from 0 to 10 ?', '');

    if (recentFilm != null && rateFilm != null && recentFilm != '' && rateFilm != '' && recentFilm.length < 50) {
      personalMovieBD.movies[recentFilm] = rateFilm;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert('Просмотрено мало фильмов');
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert('Вы классический зритель');
  } else if (numberOfFilms >= 30) {
    alert('Вы киноман');
  } else {
    alert('Ошибка');
  }
}
detectPersonalLevel()

function showMyBd(hidden) {
  if (!hidden) {
    console.log(personalMovieBD)
  }
}
showMyBd(personalMovieBD.privat);

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    personalMovieBD.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`);
  }
}
writeYourGeners();