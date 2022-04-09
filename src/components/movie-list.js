import React from 'react';
import classes from './movielist.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const MovieList = (props) => {
    //console.log('inside movielist'+props.movies[0] + props.movies[1])

    const onMovieAction = (movie,action) => {
        //console.log('movie clicked' + movie.id + ' ' + movie.title)
        props.onMovieAction(movie,action)
    }

    return(
        <div>
            <div className={classes.ListHead}>
                <div><h2>Movie List</h2></div>
                <div className={classes.Icons}>
                    <h2>
                        <FontAwesomeIcon icon={faPlusSquare} className={classes.Icon} onClick={event => {onMovieAction(null,'C')}}/>
                    </h2>
                </div>
            </div>
            
            {props.movies.map( movie => {
            return(
                <div key={movie.id}>
                    <div className={classes.MovieList}>
                        <div className={classes.List} onClick={event => {onMovieAction(movie,'S')}}>{movie.title}</div>
                        <div className={classes.Icons}>
                            <FontAwesomeIcon icon={faEdit} className={classes.Icon} onClick={event => {onMovieAction(movie,'E')}}/>
                            <FontAwesomeIcon icon={faTrashAlt} className={classes.Icon} onClick={event => {onMovieAction(movie,'D')}}/>
                        </div>
                    </div>
                </div>
            )
            })
            }
        </div>)
}

export default MovieList;