import React from 'react';
import classes from './moviedetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Rateme from './rateme';
import { API } from '../../src/api-service';
import ActionButton from '../tools/actionbutton'

const MovieDetails = (props) => {

    const updateRating = (rating) =>{
      //console.log('movie-details - the updated movie rating is '+rating+' for the movie ' + props.movie.title);
          API.updateMovieRating(props.movie.id,{stars:rating})
          .then(res => {
            //console.log(res);
            API.getSelectedMovie(props.movie.id)
            .then(res => {
              //console.log(res)
              props.onRatingUpdate(res);
            })
            .catch(err => {
              console.log(err)
            })

          })
          .catch(err =>
            console.log(err))
    }
    
    return(
        <div>
            <h2>Movie Details</h2>
            <h3>Name:</h3>  
            <h3 className={classes.Content}>{props.movie.title}</h3>
            <h3>Description:</h3>
            <h3 className={classes.Content}>{props.movie.description}</h3>
            <h3>Ratings:</h3>
            <h3 className={classes.Content}>{props.movie.averageRating} ({props.movie.totalRatings})</h3>
            {[...Array(5)].map((a,index)=>{
                return(<FontAwesomeIcon key={index} icon={faStar} className={props.movie.averageRating >= index+1 ? classes.Orange : ""}/>)
            })}
            {/* <FontAwesomeIcon icon={faStar} className={props.movie.averageRating >= 1 ? classes.Orange : ""}/>
            <FontAwesomeIcon icon={faStar} className={props.movie.averageRating >= 2 ? classes.Orange : ""}/>
            <FontAwesomeIcon icon={faStar} className={props.movie.averageRating >= 3 ? classes.Orange : ""}/>
            <FontAwesomeIcon icon={faStar} className={props.movie.averageRating >= 4 ? classes.Orange : ""}/>
            <FontAwesomeIcon icon={faStar} className={props.movie.averageRating >= 5 ? classes.Orange : ""}/> */}
            ({props.movie.totalRatings})
            {props.action === 'S' && <Rateme onRatingSelected={updateRating}/>}
            {props.action === 'D' && <ActionButton action={props.action}/>}
        </div>
    )
}

export default MovieDetails;