import React from 'react'
import { Grid, Button, makeStyles, AppBar, Tab, Tabs, Box, Typography } from '@material-ui/core'

import PropTypes from 'prop-types';
import './Description.css'
import Navbar from '../../components/Navbar/Navbar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


function Description() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <>


            <section id="desTop-sec">
                <div className="header-div">
                    <Navbar />
                    <Grid>
                        <form className="search-bar">
                            <Grid container alignItems="center">
                                <Grid items sm={3} xs={4}>
                                    <fieldset>
                                        <select className="search-select">
                                            <option value="tvShow">TV show</option>
                                            <option value="other">Other</option>

                                        </select>

                                    </fieldset>

                                </Grid>


                                <Grid items xs={8} sm={9}>

                                    <fieldset>

                                        <input className="search-textfield" type="text"
                                            placeholder="Search for a movie, TV Show or celebrity that you are looking for" />

                                    </fieldset>

                                </Grid>

                            </Grid>


                        </form>
                        <Grid container className="head-grid">
                            <Grid items xs={12} md={4}>

                            </Grid>
                            <Grid items xs={12} md={8} >
                                <h1 className="movie-head">Skyfall: Quantum of Spectre <span className="year-span">2015</span>
                                </h1>

                            </Grid>


                        </Grid>

                    </Grid>
                </div>


                <Grid container className="content-grid">
                    <Grid items xs={12} sm={12} md={4}>
                        <Grid container className="poster-grid">
                            <Grid item xs={12}>
                                <img className="movie-poster" src="../../../images/uploads/mv-it6.jpg" alt="movie poster" />

                            </Grid>
                            <Grid item xs={12} >
                                <Button variant="contained" className="play-btn poster-btn" color="primary" ><span><i class="fas fa-play" ></i>  WATCH TRAILER</span></Button>
                                <Button variant="contained" className="buy-btn poster-btn" color="primary" ><span><i class="fas fa-ticket-alt"></i>  BUY TICKETS</span></Button>


                            </Grid>

                        </Grid>


                    </Grid>

                    <Grid items xs={12} sm={12} md={8} className="review-grid">
                        <Grid container>


                            {/* <Grid items xs={12}>
                                <Grid items xs={3}>
                                    <a href="#" className="heart"><i class="fas fa-heart"></i> ADD TO FAVORITE</a>
                                    <a href="#"><i class="fas fa-share-alt"></i> SHARE</a>

                                </Grid>


                            </Grid> */}

                            <Grid items xs={12}>
                                <div className={classes.root} className="tabs-div">
                                    <AppBar position="static">
                                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                            <Tab label="OVERVIEW" {...a11yProps(0)} />
                                            <Tab label="REVIEW" {...a11yProps(1)} />

                                        </Tabs>
                                    </AppBar>
                                    <TabPanel value={value} index={0}>
                                        <Grid container>
                                            <Grid items xs={6}>
                                                <Grid container>
                                                    <Grid items xs={12}>

                                                        <p>
                                                            Tony Stark creates the Ultron Program to protect the world, but when
                                                            the peacekeeping program becomes hostile, The Avengers go into
                                                            action to try and defeat a virtually impossible enemy together.
                                                            Earth's mightiest heroes must come together once again to protect
                                                            the world from global extinction.
                                                        </p>

                                                    </Grid>



                                                </Grid>

                                            </Grid>
                                            <Grid items xs={6}>

                                            </Grid>



                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <div>
                                            <h3>Best Marvel movie in my opinion</h3>
                                        </div>
                                        <div className="comment-div">
                                            <p>This is by far one of my favorite movies from the MCU.
                                                The introduction of new Characters both good and bad also
                                                makes the movie more exciting. giving the characters more
                                                of a back story can also help audiences relate more to different
                                                characters better, and it connects a bond between the audience and
                                                actors or characters. Having seen the movie three times does not
                                                bother me here as it is as thrilling and exciting every time I am watching it.
                                                In other words, the movie is by far better than previous movies (and I do love everything Marvel),
                                                the plotting is splendid (they really do out do themselves in each film,
                                                there are no problems watching it more than once.

                                            </p>
                                        </div>
                                    </TabPanel>
                                </div>


                            </Grid>

                        </Grid>


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
                                © 2021 Blockbuster. All Rights Reserved. Designed by raman.

                            </Grid>

                            <Grid items xs={6}>
                                <a href="#desTop-sec">Back to top⬆</a>

                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>



            </footer>


        </>
    )
}

export default Description;