import React, {useState} from 'react';
import Classes from './rateme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rateme = (props) => {

    const [RatingSelected, setRatingSelected] = useState(0)

    // useEffect(()=>{
    //     console.log(RatingSelected)
    // },[RatingSelected])

    const onRatingHover = (event,index) =>{setRatingSelected(index+1)}

    const onRatingHoverOut = (event) =>{setRatingSelected(0)}

    const onRatingSelected = (event,index) =>{props.onRatingSelected(index+1);}

    return(
    <div className={Classes.Rateme}>
        <h2>Rate Me</h2>
        {[...Array(5)].map((a,index)=>{
            return(<FontAwesomeIcon key={index} 
                                    icon={faStar} 
                                    className={`${Classes.stars} ${RatingSelected>index ? Classes.purple : ''}`} 
                                    onMouseEnter={event => onRatingHover(event,index)}
                                    onMouseLeave={event => onRatingHoverOut(event)}
                                    onClick={event => onRatingSelected(event,index)}/>)
                                    
        })}
    </div>
    )
}

export default Rateme;