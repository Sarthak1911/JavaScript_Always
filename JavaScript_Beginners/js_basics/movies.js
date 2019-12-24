const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.8 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

//All the movies in 2018
//Sort them by their rating in Descending order
//Pick their titles and display on the console
const filteredMovies = movies
  .filter(movie => movie.year === 2018 && movie.rating > 4)
  .sort((movieOne, movieTwo) => {
    if (movieOne.rating > movieTwo.rating) return -1;
    if (movieOne.rating < movieTwo.rating) return 1;
    return 0;
  })
  .map(movie => movie.title);

console.log(filteredMovies);
