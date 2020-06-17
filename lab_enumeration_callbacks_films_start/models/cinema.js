const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = [];
  this.films.forEach((film) => {
    titles.push(film.title);
  })
  return titles;
  
}

Cinema.prototype.filmsFound = function (title) {
  const found = this.films.find(film => film.title === title);
  return found;
}

Cinema.prototype.filterByGenre = function(genre) {
  const filmsMatchingGenre = this.films.filter(film => film.genre === genre)
  return filmsMatchingGenre
}






  // const titles = this.films.map((film)=>{
  //   return film.title
  // })

  // return titles


module.exports = Cinema;
