// Exercise 1: Get the array of all directors
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFiltered = array.filter((movie) => movie.director == director);
  return moviesFiltered;
}

// Exercise 3: Calculate the average of the films of a given director
function moviesAverageOfDirector(array, director) {
  let directorFiltered = getMoviesFromDirector(array, director);
  let totalScore = directorFiltered.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  let average = Number((totalScore / directorFiltered.length).toFixed(2));
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map((movie) => movie.title);
  let alphabeticTitles = titles.sort((a, b) => a.localeCompare(b));
  titles = alphabeticTitles.slice(0, 20);
  return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
