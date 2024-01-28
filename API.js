const movies = [
    { title: 'Things fall apart', director: 'Chinua Achebe', year: '1958', id: 'R09823', added_at: '2022-07-08' },
    { title: 'The Alchemist', director: 'Paulo Coelho', year: '1988', id: 'H0rr0r24', added_at_: '2023-01-09' },
  ]
  
  const catalogue = {
    R098823: 1,
    H0rr0r24: 1,

  }
  
  const rent_movies = []
  
  class Movie {
    constructor(_movie = { title, author, year, id }) {
      this.title = _movie.title
      this.director = _movie.director
      this.year = _movie.year
      this.id = _movie.id
      
    }v
  
    add_movie(movie) {
      movie.added_at = new Date().toISOString()
      movie.push(movie)
      [movie.id] = catalogue[movie.id] ? catalogue[book.id] + 1 : 1
      // if (catalogue[movie.id]) {
      //   catalogue[movie.id] = catalogue[movie.id] + 1
      // } else {
      //   catalogue[movie.id] = 1
      // }
      return movie
    }
  
  }
  
  const remove_movie = (id) => { }
  
  const add_movie = (movie) => {
    movie.added_at= new Date().toLocaleDateString()
    movie.push(movie)
    catalogue[movie.id] = catalogue[movie.id] ? catalogue[movie.id] + 1 : 1
    // if ( catalogue[movie.id]) {
    //    catalogue[movie.id] =  catalogue[movie.id] + 1
    // } else {
    //    catalogue[movie.id] = 1
    // }
    return movie
  }
  
  const get_movie = (id) => { }
  
  console.log(movies)
  console.log(catalogue)
  
  add_movie({ title: 'Things fall apart', author: 'Chinua Achebe', year: '1958', ISBN: '9780385474542' })
  add_movie({ title: 'Chike and The River', author: 'Chinua Achebe', year: '1958', ISBN: '9781291702' })
  // add_movie({ title: 'Chike and The River', author: 'Chinua Achebe', year: '1958', ISBN: '9781291702' })
  
  console.log(movies)
  console.log(catalogue)
  
  class Shop {
  
    addMovies(_movies) {
      const is_array_of_movies = Array.isArray(movies)
      if (!is_array_of_movies) {
        throw new Error('Unavailable movies')
      }
  
      for (const _book of _movies) {
        const instance = new Movie(_movie)
  
        const new_movie = instance.add_movie(instance)
      }
    }
  }
  
  new Shop().addMovies([
    { title: 'Chike and The River', author: 'Chinua Achebe', year: '1958', ISBN: '9781291702' }, 
    { title: 'Chike and The River', author: 'Chinua Achebe', year: '1958', ISBN: '9781291702' }
  ])
  
  console.log(movies)
  const email = 'houseofjudahrentals@gmail.com'
  console.log(email.split('@')[1].split('.')[1])
