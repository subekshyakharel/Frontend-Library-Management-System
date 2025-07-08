import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { ImStarEmpty } from "react-icons/im";

const maxRate = 5
const Star = ({avgRating,totalReviews}) => {

    if(avgRating<0 || avgRating>5){
        return "";
    }

    const halfStar = !Number.isInteger(avgRating)
    const fullStar = Math.floor(avgRating)
    const emptyStar = maxRate - fullStar- (halfStar? 1: 0)

    const showStars = []

    for(let i=0; i<fullStar; i++){
        showStars.push(<FaStar className='text-warning'/>)
    }

    if(halfStar){
        showStars.push(<FaStarHalfStroke className='text-warning'/>)
    }
    for(let i=0; i<emptyStar; i++){
        showStars.push(<ImStarEmpty />)
    }
  return (
    <div>
        {showStars} {" "}

        {totalReviews && (totalReviews + " Reviews")}
    </div>
  )
}

export default Star