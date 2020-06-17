const Cinema = function (films) {
  this.films = films
};

Cinema.prototype.filmTitles = function () {
  const titles = []
  this.films.forEach((film) => {
    titles.push(film.title)
  })
  return titles
  
}

Cinema.prototype.filmsFound = function (title) {
  const found = this.films.find(film => film.title === title)
  return found
}

Cinema.prototype.filterByGenre = function(genre) {
  const filmsMatchingGenre = this.films.filter(film => film.genre === genre)
  return filmsMatchingGenre
}

Cinema.prototype.filterByYear = function (year) {
  const filmsMatchingYear = this.films.filter(film => film.year === year)
  return filmsMatchingYear
}

Cinema.prototype.filmsMatchingYear = function (year) {
  const filmsMatchingYear = this.films.filter(film => film.year === year)
  return filmsMatchingYear === []
}


Cinema.prototype.lengthChecker = function(minutes){
  const filmsOverLength = this.films.filter(film => film.length>minutes)
  return filmsOverLength
}



  // const titles = this.films.map((film)=>{
  //   return film.title
  // })

  // return titles


module.exports = Cinema;
