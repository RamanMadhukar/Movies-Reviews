import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import './Signin.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';



function Signin({ history }) {

    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };
    const informParent = response => {
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
        });
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('SIGNIN SUCCESS', response);
                // save the response (user, token) localstorage/cookie
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                    // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                    isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
                });
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };


    const signinForm = () => (
        

        <Grid className="topGrid">
            <Paper elevation={10} className="paperStyle" >
                <Grid align='center'>
                    <Avatar className="lock"><LockOutlined /></Avatar>
                    <h2 className="logHead">Login in</h2>

                </Grid>
                <Grid className="logText">
                    <TextField label="Username or Email" onChange={handleChange('email')} value={email} placeholder="Enter Username or Email" fullWidth required />
                    <TextField label="Password" onChange={handleChange('password')} value={password} placeholder="Enter Password" type="password" fullWidth required />
                </Grid>
                <FormControlLabel
                    control={
                        <Checkbox
                            className="remCheck"
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button className="loginbtn" onClick={clickSubmit} variant="contained" color="primary" fullWidth >{buttonText}</Button>

                <Grid className="bottomDiv">
                    <Typography >
                        <Link to="/" className="Fp">
                            Forgot password
                        </Link>
                    </Typography>
                    <Typography >
                        Don't have an Account?
                        <Link to="/signup" className="Fp" >
                            Sign up
                        </Link>
                    </Typography>
                </Grid>


            </Paper>


        </Grid>
    )
    return (
            <>
           
           
                <div className="login-div">
                <Navbar />
                    <ToastContainer />
                    {isAuth() ? <Redirect to="/" /> : null}

                    {signinForm()}

                </div>
           
            </>

            )
}

            export default Signin;