const Token = '853a4ba69e4dbfddd2ed753e8b0f613699a73651'

export class API{
    static updateMovieRating = (movie_id,body) =>{

        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/rate_movie/`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'authorization':`Token ${Token}`
            },
            body:JSON.stringify(body)
          })
          .then(res => res.json())
    }

    static getAllMovies = () =>{

        return fetch(`http://127.0.0.1:8000/api/movies/`,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
              'authorization':`Token ${Token}`
            }
          })
          .then(res => res.json())
    }

    static getSelectedMovie = (movie_id) =>{

        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}`,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
              'authorization':`Token ${Token}`
            }
          })
          .then(res => res.json())
    }
}