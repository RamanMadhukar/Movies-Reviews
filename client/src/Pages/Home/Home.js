
import { Grid, Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.css';
import Carousel from 'react-elastic-carousel';
import Layout from '../../components/Layout/Layout'
import Poster from '../../components/Poster/Poster'
import SmallPoster from '../../components/smallPoster/SmallPoster';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular(); 
    }, []);

    const getPopular = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/popular`
        })
            .then(response => {
                console.log(response);
                setPopular(response.data)
            })
            .catch(error => {
                console.log('Popular Movies not found', error.response.data.error);
            });
    };

    const [latest, setLatest] = useState([]);
    useEffect(() => {
        getLatest(); 
    }, []);

    const getLatest = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/latest`
        })
            .then(response => {
                console.log(response);
                setLatest(response.data)
            })
            .catch(error => {
                console.log('Latest  Movies not found', error.response.data.error);
            });
    };
    const breakPoints = [
        { width: 400, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 800, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 } 

    ];

    const slideBreakpoints = [
        { width: 200, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },


    ];
    return (
        <>
            <section id="top-sec">
              <Navbar />
                <Grid container className="top-grid">
                    <Grid className="search-grid" item xs={12}>
                        <form className="search-bar">
                            <Grid container alignItems="center">
                                <Grid item sm={3} xs={4}>
                                    <fieldset>
                                        <select className="search-select">
                                            <option value="tvShow">TV show</option>
                                            <option value="other">Other</option>

                                        </select>

                                    </fieldset>

                                </Grid>


                                <Grid item xs={8} sm={9}>

                                    <fieldset>

                                        <input className="search-textfield" type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />

                                    </fieldset>

                                </Grid>

                            </Grid>


                        </form>



                    </Grid>

                    <Grid container xs={12} >
                        <Carousel breakPoints={breakPoints} className="carousel" >

                        
                        {
                                popular.map(pop =>(
                                    <Poster
                                movieImg={`/uploads/${pop.movieImage}`}
                                movieCat={pop.movieCat}
                                movieLang={pop.movieLang}
                                rating={pop.imdbRating}
                                name={pop.name}

                            />
                                      ))
                            }

                        </Carousel>

                    </Grid>

                </Grid>

            </section>


            <section id="movie-Section">
                <Grid container className="movie-grid" >
                    <Grid item md={8} xs={12}>
                        <Grid item lg={12} xs={12}>
                            <div className="heading-flex">

                                <h1>Latest Movies</h1>

                                <h4 className="fat">View All <i className="fas fa-chevron-right"></i></h4>


                            </div>

                            <Carousel breakPoints={slideBreakpoints} className="carousel-movie" >

                            {
                                latest.map(lat => (
                                    <SmallPoster
                                    movieImg={`/uploads/${lat.movieImage}`}
                                    name={lat.name}
                                    rating={lat.imdbRating}
                                />
                                ))
                            }
                 
                            </Carousel>

                        </Grid>

                        <Grid className="slider-grid" items xs={12}>

                            <div className="heading-flex">

                                <h1>ON TV</h1>

                                <h4 className="fat">View All <i className="fas fa-chevron-right"></i></h4>


                            </div>
                            <Carousel breakPoints={slideBreakpoints} className="carousel-movie" >
                               
                              <SmallPoster
                                    movieImg="../../../images/uploads/mv-it7.jpg"
                                    name="INTERSTTLER"
                                    rating="8.4"
                                />
                                 <SmallPoster
                                    movieImg="../../../images/uploads/mv-it7.jpg"
                                    name="INTERSTTLER"
                                    rating="8.4"
                                />
                                 <SmallPoster
                                    movieImg="../../../images/uploads/mv-it7.jpg"
                                    name="INTERSTTLER"
                                    rating="8.4"
                                />
                                 <SmallPoster
                                    movieImg="../../../images/uploads/mv-it7.jpg"
                                    name="INTERSTTLER"
                                    rating="8.4"
                                />
                                 <SmallPoster
                                    movieImg="../../../images/uploads/mv-it7.jpg"
                                    name="INTERSTTLER"
                                    rating="8.4"
                                />
                                 <SmallPoster
                                    movieImg="../../../images/uploads/mv-it7.jpg"
                                    name="INTERSTTLER"
                                    rating="8.4"
                                />

                            </Carousel>




                        </Grid>

                    </Grid>

                    <Grid item md={4} xs={12}>
                    <Container>
                    <div className="img-container">
                    <img src="https://i.pinimg.com/564x/d4/3e/39/d43e39a50041e7cc2090c3bd42100fda.jpg" width="80%" alt="" />
                       
                    </div>
                    <img src="../../../images/uploads/ads1 (1).png" alt="" width="90%" />
                     

                    </Container>
                    
                    
                        
                    </Grid>



                </Grid>


            </section>


            <footer id="footer">

                <Grid container>
                    <Grid items xs={4}>
                        <img alt="Brand Logo" src="../../../images/uploads/logo1.png" />
                    </Grid>

                    <Grid items xs={8}>

                    </Grid>
                    <hr />
                    <Grid items xs={12}>
                        <Grid container className="copyright">
                            <Grid items xs={6}>
                                © 2021 Harsh Tripathi. All Rights Reserved. Designed by Raman.

                            </Grid>

                            <Grid items xs={6}>
                                <a href="#top-sec">Back to top⬆</a>

                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>



            </footer>



        </>
    )
}

export default Home
