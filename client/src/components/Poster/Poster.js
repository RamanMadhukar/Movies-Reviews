import React from 'react'
import { Grid } from "@material-ui/core";
import './Poster.css'


const Poster = ({
    movieImg,
    name,
    movieCat,
    movieLang,
    rating

}) => {
    
    return (
        <>
            <Grid items className="car-card" >
                <img alt="movie poster" src={movieImg} />
                <div className=" car-text-div">
                    <span className="car-text-span yellow">
                        <a href="#">{movieCat}</a>
                    </span>
                    <span className="car-text-span blue">
                        <a href="#">{movieLang}</a>
                    </span>
                    <h6>{name}</h6>
                    <h5>⭐{rating}<span>/10</span></h5>
                </div>
            </Grid>
        </>
    )
}

export default Poster
