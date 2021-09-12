import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';



function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { name, email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { name, email, password }
        })
            .then(response => {
                console.log('SIGNUP SUCCESS', response);
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('SIGNUP ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };


    const signupForm = () => (
        <Grid className="topGrid">
            <Paper elevation={10} className="paperStyle" >
                <Grid align='center'>
                    <h2 className="logHead">Sign Up</h2>

                </Grid>
                <Grid className="logText">
                    <TextField onChange={handleChange('name')} value={name} label="Name" placeholder="Enter Name" fullWidth required />
                    <TextField onChange={handleChange('email')} value={email} label="Email" placeholder="Enter Email" type="email" fullWidth required />
                    <TextField onChange={handleChange('password')} value={password} label="Password" placeholder="Enter Password" type="password" fullWidth required />
                </Grid>

                <Button className="loginbtn" variant="contained" color="primary" onClick={clickSubmit} fullWidth >{buttonText}</Button>

                <Grid className="bottomDiv">

                    <Typography >
                        {/* <Link href="#" style={{ color: "#666666" }}>
                                    Already Have An Account.
                                </Link> */}
                    </Typography>
                </Grid>


            </Paper>


        </Grid>


    )
    return (
     

            <div className="login-div">
            <Navbar />
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}
                {signupForm()}
            </div>
      


    )
}

export default Signup;