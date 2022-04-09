//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import { API } from '../src/api-service';
import MovieForm from './components/movieform';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieSelected, setMovieSelected] = useState(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [ratingUpdateStatus,setRatingUpdateStatus] = useState(false);
  const [movieAction,setMovieAction] = useState(null);

  useEffect(() => {
    //console.log('Fetching latest movies')
    API.getAllMovies()
    .then(res => {
      setMovies(res)
      setLoading(false)
    })
    .catch(err => {
      console.log(err);
      setErrorLoading(true);
      setLoading(false);
    })
  },[ratingUpdateStatus])

  const onMovieAction = (movie,action) =>{
    setMovieAction(action)
    setMovieSelected(movie)
  }

  const ratingUpdated = (res) =>{
    //console.log('Rating was updated :' +res);
    setRatingUpdateStatus(prevState => {return !prevState});
    setMovieSelected(res);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1 key='head'>Movie Rater</h1>
      </header>
      <div className="movies">
          {loading && <h1>Loading...</h1>}
          {!loading && !errorLoading && <MovieList movies={movies} onMovieAction={onMovieAction}/>}
          {errorLoading && <h1>Oops something went wrong!!</h1>}
          {loading && <div><h1>Loading...</h1></div>}
          {!loading && !errorLoading && !movieSelected && !movieAction && <div><h2>Select a movie from the list!!</h2></div>}
          {!loading && !errorLoading && movieSelected && movieAction==='S' && <MovieDetails movie={movieSelected} action={movieAction}  onRatingUpdate={ratingUpdated}/>}
          {!loading && !errorLoading && movieAction && movieAction!=='S' && <MovieForm movie={movieSelected} action={movieAction}/>}
          {errorLoading && <h1>Check your internet or contact admin</h1>}
      </div>
    </div>
  );
}

export default App;
