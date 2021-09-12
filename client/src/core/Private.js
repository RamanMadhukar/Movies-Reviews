import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { isAuth, getCookie, signout, updateUser } from '../auth/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../components/Layout/Layout';
import './Private.css'
import Navbar from '../components/Navbar/Navbar';
import { Grid } from '@material-ui/core';
import {
    LineStyle,
    StarBorder
} from "@material-ui/icons";


const Private = ({ history }) => {
    const [values, setValues] = useState({
        role: '',
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });
    const token = getCookie('token');

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/user/${isAuth()._id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('PRIVATE PROFILE UPDATE', response);
                const { role, name, email } = response.data;
                setValues({ ...values, role, name, email });
            })
            .catch(error => {
                console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
                if (error.response.status === 401) {
                    signout(() => {
                        history.push('/');
                    });
                }
            });
    };

    const { role, name, email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/user/update`,

            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { name, password },
        })
            .then(response => {
                console.log('PRIVATE PROFILE UPDATE SUCCESS', response);
                updateUser(response, () => {
                    setValues({ ...values, buttonText: 'Submitted' });
                    toast.success('Profile Updated Successfully');
                })

            })
            .catch(error => {
                console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const updateForm = () => (
        <form className="userUpdateForm">
            <div className="userUpdateLeft">
                <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                        type="text"
                        onChange={handleChange('name')}
                        className="userUpdateInput"
                        value={name}

                    />
                </div>
                <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                        type="text"
                        onChange={handleChange('email')}
                        value={email}
                        className="userUpdateInput"
                        disabled
                    />
                </div>

                <div className="userUpdateItem">
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={handleChange('password')}
                        value={password}
                        className="userUpdateInput"
                    />
                </div>

                <button className="userUpdateButton" onClick={clickSubmit}>Update</button>

            </div>

        </form>
        // {/* <form>
        //     <div className="form-group">
        //         <label className="text-muted">Role</label>
        //         <input defaultValue={role} type="text" className="form-control" disabled />
        //     </div>
        //     <div className="form-group">
        //         <label className="text-muted">Name</label>
        //         <input onChange={handleChange('name')} value={name} type="text" className="form-control" />
        //     </div>

        //     <div className="form-group">
        //         <label className="text-muted">Email</label>
        //         <input defaultValue={email} type="email" className="form-control" disabled />
        //     </div>

        //     <div className="form-group">
        //         <label className="text-muted">Password</label>
        //         <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
        //     </div>

        //     <div>
        //         <button className="btn btn-primary" onClick={clickSubmit}>
        //             {buttonText}
        //         </button>
        //     </div>
        // </form> */}
    );

    return (
        <>
            <div className="user-profile">
                <Navbar />
                <h1>Welcome {name} </h1>
                <span
                    onClick={() => {
                        signout(() => {
                            history.push("/")
                        })
                    }}
                >
                    <i className="fas fa-2x fa-sign-out-alt"></i>
                </span>
            </div>

            <Grid container>
                <Grid item md={3}>
                    <div className="sidebar">
                        <div className="sidebarWrapper">
                            <div className="sidebarMenu">
                                <h3 className="sidebarTitle">Dashboard</h3>
                                <ul className="sidebarList">
                                    <Link to="/admin" className="link userDash">
                                        <li className="sidebarListItem active">
                                            <LineStyle className="sidebarIcon" />
                                            Home
                                        </li>
                                    </Link>
                                    <Link to="/admin" className="link">
                                        <li className="sidebarListItem">
                                            <StarBorder className="sidebarIcon" />
                                            Rating
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={7}>
                    <div className="userContainer">
                        <ToastContainer />
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit Profile</span>
                            {updateForm()}
                        </div>
                    </div>

                </Grid>
            </Grid>




        </>

    );
};

export default Private;