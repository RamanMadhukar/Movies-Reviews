import React from 'react'
import './SmallPoster.css'
import { Grid } from '@material-ui/core'


const SmallPoster = ({
    movieImg,
    name,
    rating
}) => {
    return (

        <>
            <div className="small-card">

                <div className="car-card" >
                    <div className="movie-img">
                        <img alt="movie poster" src={movieImg} width="100%" height="auto" />

                    </div>

                    <div className="read-more">
                        <button >Read More</button>
                    </div>



                    <div className=" car-text-div-small">
                        <h6>{name}</h6>
                        <h5>⭐{rating}<span>/10</span></h5>
                    </div>

                </div>

            </div>



        </>
    )
}

export default SmallPoster
