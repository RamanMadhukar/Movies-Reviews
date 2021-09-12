import React from 'react'
import './AllMovieComponent.css'
import { Grid } from '@material-ui/core'


const AllMovieComponent = ({
    movieImg,
    name,
    rating
}) => {

    
    return (

        <>

                <div className="allTop" >
                    <div className="alltop-img">
                        <img alt="movie poster" src={movieImg} width="100%" height="auto" />

                    </div>

                    <div className="all-readmore">
                        <button >Read More</button>
                    </div>



                    <div className="allSamllText">
                        <h6>{name}</h6>
                        <h5>⭐{rating}<span>/10</span></h5>
                    </div>

                </div>


        </>
    )
}

export default AllMovieComponent
