import React from "react";
import { Grid, Container } from '@material-ui/core';
import Navbar from "../../components/Navbar/Navbar";
import SmallPoster from '../../components/smallPoster/SmallPoster';
import Carousel from 'react-elastic-carousel';
import "./AllMovies.css"
import AllMovieComponent from "../../components/AllMovieComponent/AllMovieComponent";



const AllMovies = () => {


    return (

        <>
            <section className="allcon">
                <section className="all-moviesGrid" id="for-top">
                    <Navbar />


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


                    <h1 className="allHead">ALL MOVIES</h1>
                    <p className="allp"> <a href="/">Home</a>  &#62;  All Movies</p>


                </section>


                <Container className="">
                    <div className="Allgrid">

                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it1.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />

                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it2.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />
                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it3.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />
                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it4.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />
                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it5.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />
                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it6.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />
                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it7.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />
                        <AllMovieComponent
                            movieImg="../../../images/uploads/mv-it8.jpg"
                            name="INTERSTTLER"
                            rating="8.4"
                        />




                    </div>



                </Container>




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
                                    <a href="#for-top">Back to top⬆</a>

                                </Grid>
                            </Grid>

                        </Grid>


                    </Grid>



                </footer>

            </section>

        </>

    )
}

export default AllMovies