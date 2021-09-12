  
import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Card, CardContent, TextField, Button, Grid, CardMedia} from '@material-ui/core';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



function ImageUpload(){

const history = useHistory();

const [file, setFile] = useState();


function uploadimage(){
	const formData = new FormData();
	formData.append('file', file)
	Axios.post('http://localhost:5000/api/image', formData , {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	}).then(response => {
        console.log('Image Uploaded  Successfully !', response);
        setFile({ ...file, value: '', buttonTxt: 'Created' });
          toast.success('Image  Uploaded Successfully');
        

      })
      .catch(error => {
        console.log('ERROR ON UPLOADING THE IMAGE', error.response.data.error);
        toast.error(error.response.data.error);
      });
}
	return(
		<div>
            <ToastContainer />
			<h1>Welcome to About</h1>
			<Link to='/'>Home</Link>
			<Grid container>
			<Grid item xs={4}>
				<h4 align="center">Forgot Password</h4>
				<CardContent>
					<TextField id='email' fullWidth label="Fill your Email" />
				</CardContent>
				<CardContent>
					<Button variant='contained' color='primary'>Send OTP</Button>
				</CardContent>
			</Grid>
			<Grid item xs={4}>
				<h4>Upload Image</h4>
				<CardContent>
					<TextField fullWidth id='file' name= "file" type="file" onChange={(event) => {setFile(event.target.files[0], console.log(event.target.files[0]))}} label="File Upload" />
				</CardContent>
				<CardContent>
					<Button variant='contained' color='secondary' onClick={uploadimage}>Submit</Button>
				</CardContent>

			</Grid>
			
			</Grid>

		</div>
		)
}

export default ImageUpload;
