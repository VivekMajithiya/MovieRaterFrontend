import React from "react";
import classes from './movieform.module.css';
import MovieDetails from "./movie-details"

const MovieForm = (props) => {

    return(
        <div>
            {props.action === 'D' && <MovieDetails movie={props.movie} action={props.action}/>}
        </div>)
}

export default MovieForm;