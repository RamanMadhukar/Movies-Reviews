import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./CatAndTag.css";
import React, { useState, useEffect } from 'react';
import { isAuth, getCookie, signout, updateUser } from '../../auth/helpers';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Container, Grid } from '@material-ui/core';



const initialvalues = {
  name: '',
  buttonText: 'Create'
}
const lang = {
  value: '',
  buttonTxt: 'Create'
}


export default function CatAndTag() {
  const [category, setCategory] = useState(initialvalues);
  const [language, setLanguage] = useState(lang);
  const token = getCookie('token');

  const { name, buttonText } = category;
  const handleChange = name => event => {
    // console.log(event.target.value);
    setCategory({ ...category, [name]: event.target.value });
  };
  const clickSubmit = event => {
    event.preventDefault();
    setCategory({ ...category, buttonText: 'Creating' });
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/category`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: { name },
    })
      .then(response => {
        console.log('Category created Successfully !', response);
        setCategory({ ...category, name: '', buttonText: 'Created' });
          toast.success('Category Created Successfully');
        

      })
      .catch(error => {
        console.log('ERROR ON SAVING CATEGORY IN DATABASE', error.response.data.error);
        setCategory({ ...category, buttonText: 'Create' });
        toast.error(error.response.data.error);
      });
  };

  const { value, buttonTxt } = language;
  const handleEvent = name => event => {
    // console.log(event.target.value);
    setLanguage({ ...language, [name]: event.target.value });
  };

  const clickLanguage = event => {
    event.preventDefault();
    setLanguage({ ...language, buttonTxt: 'Creating' });
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/language`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: { value },
    })
      .then(response => {
        console.log('Language created Successfully !', response);
        setLanguage({ ...language, value: '', buttonTxt: 'Created' });
          toast.success('Language Created Successfully');
        

      })
      .catch(error => {
        console.log('ERROR ON SAVING LANGUAGE IN DATABASE', error.response.data.error);
        setLanguage({ ...language, buttonTxt: 'Create' });
        toast.error(error.response.data.error);
      });
  };
 

  return (
    <AdminLayout>
      <ToastContainer />
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Container>
              <div className="newProduct">
                <h1 className="addProductTitle">Add Category</h1>
                <form className="addProductForm">
                  <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Add Category" onChange={handleChange('name')} value={name} />
                  </div>
                  <button className="addProductButton" onClick={clickSubmit}>{buttonText}</button>
                </form>
              </div>
            </Container>

          </Grid>
          <Grid item md={6} xs={12}>
          <Container>
              <div className="newProduct">
                <h1 className="addProductTitle">Add Language</h1>
                <form className="addProductForm">
                  <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Add Language" onChange={handleEvent('value')} value={value} />
                  </div>
                  <button className="addProductButton" onClick={clickLanguage}>{buttonTxt}</button>
                </form>
              </div>
            </Container>

            
          </Grid>
        </Grid>
      </Container>

    </AdminLayout>


  );
}
