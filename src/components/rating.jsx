import { faDotCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class Rating extends React.Component {

    renderRating = () => {
        let totalStars = 5;
        let stars = [];
        for(let i = 0; i < this.props.rating; i++){
            totalStars--;
            stars.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>);
        }
        for(let i = 0; i < totalStars; i++){
            stars.push(<FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon>);
        }
        return stars;
    }

    render() { 
        return this.renderRating();
    }
}
 
export default Rating;