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
  return array
  .map((movie) => movie.title)
  .sort((a, b) => a.localeCompare(b))
  .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = [...array];
  newArray.sort((a, b) => {
    if(a.year < b.year) return -1;
    if(a.year > b.year) return 1;
    return a.title.localeCompare(b.title);
  });
  return newArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const categoryFiltered = array.filter((movie) => movie.genre.includes(category));
  
  const totalScore = categoryFiltered.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  
  const average = Number((totalScore / categoryFiltered.length).toFixed(2));
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map((movie) => {
    const newArray = { ...movie };
    let totalMinutes = 0;
    const duration = movie.duration;

    if(duration.includes('h')){
      const hours = parseInt(duration.split('h')[0]);
      totalMinutes += hours * 60;
    }

    if(duration.includes('min')){
      const min = parseInt(duration.split('h')[1]);
      totalMinutes += min;
    }

    newArray.duration = totalMinutes;
    return newArray;
  });
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
