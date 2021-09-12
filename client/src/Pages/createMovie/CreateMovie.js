import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./CreateMovie.css";
import React, { useState, useEffect } from 'react';
import { isAuth, getCookie, signout, updateUser } from '../../auth/helpers';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const initialvalues ={
    name: '',
    directedBy: '',
    writtenBy: '',
    screenplayBy: '',
    storyBy: '',
    producedBy: '',
    cinematography: '',
    editedBy: '',
    musicBy: '',
    productionCompany: '',
    distributedBy: '',
    releaseDate: '',
    runningTime: '',
    country: '',
    budget: '',
    boxOfficeCollection: '',
    imdbRating: '',
    movieCat: '',
    movieLang: '',
    buttonText: 'Create'
}
 
export default function NewUser() {
  


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/categories`
        })
            .then(response => {
                console.log(response);
                setCategories(response.data)
            })
            .catch(error => {
                console.log('Categories are not found', error.response.data.error);
            });
    };


    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        getLanguages();
    }, []);

    const getLanguages = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/languages`
        })
            .then(response => {
                console.log(response);
                setLanguages(response.data)
            })
            .catch(error => {
                console.log('Languages are not found', error.response.data.error);
            });
    };

      
    const [movie, setMovie] = useState(initialvalues);
    const [fileName, setFileName] = useState("movieImage");

    const token = getCookie('token');
    const {
        name,
        directedBy,
        writtenBy,
        screenplayBy,
        storyBy,
        producedBy,
        cinematography,
        editedBy,
        musicBy,
        productionCompany,
        distributedBy,
        releaseDate,
        runningTime,
        country,
        budget,
        boxOfficeCollection,
        imdbRating,
        movieCat,
        movieLang,
        buttonText
    } = movie;

    const handleChange = name => event => {
        console.log(event.target.value);
        setMovie({ ...movie, [name]: event.target.value });
    };
    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    }

    const clickSubmit = event => {
        event.preventDefault();

        const formData = new FormData();
	    
        formData.append('name', name)
        formData.append('directedBy', directedBy)
        formData.append('writtenBy', writtenBy)
        formData.append('screenplayBy', screenplayBy)
        formData.append('storyBy', storyBy)
        formData.append('producedBy', producedBy)
        formData.append('cinematography', cinematography)
        formData.append('editedBy', editedBy)
        formData.append('musicBy', musicBy)
        formData.append('productionCompany', productionCompany)
        formData.append('distributedBy', distributedBy)
        formData.append('releaseDate', releaseDate)
        formData.append('runningTime', runningTime)
        formData.append('movieCat', movieCat)
        formData.append('movieLang', movieLang)
        formData.append('budget', budget)
        formData.append('country', country)
        formData.append('boxOfficeCollection', boxOfficeCollection)
        formData.append('imdbRating', imdbRating)
        formData.append('movieImage', fileName);

        
        

        setMovie({ ...movie, buttonText: 'Creating' });
        axios.post('http://localhost:5000/api/movie', formData , {
		headers: {
			'Content-Type': 'multipart/form-data'
		}, 
        data: {
                    name,
                    directedBy,
                    writtenBy,
                    screenplayBy,
                    storyBy,
                    producedBy,
                    cinematography,
                    editedBy,
                    musicBy,
                    productionCompany,
                    distributedBy,
                    releaseDate,
                    runningTime,
                    movieCat,
                    movieLang,
                    country,
                    budget,
                    fileName,
                    boxOfficeCollection,
                    imdbRating
                },

	})
        // axios({
        //     method: 'POST',
        //     url: `${process.env.REACT_APP_API}/movie`,
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             Authorization: `Bearer ${token}`
        //         },

            
        //     data: {
        //         name,
        //         directedBy,
        //         writtenBy,
        //         screenplayBy,
        //         storyBy,
        //         producedBy,
        //         cinematography,
        //         editedBy,
        //         musicBy,
        //         productionCompany,
        //         distributedBy,
        //         releaseDate,
        //         runningTime,
        //         movieCat,
        //         movieLang,
        //         country,
        //         budget,
        //         movieImage,
        //         boxOfficeCollection
        //     },
        // })
            .then(response => {
                console.log('Movie created Successfully !', response);
                setMovie({
                    ...movie,
                    name: '',
                    directedBy: '',
                    writtenBy: '',
                    screenplayBy: '',
                    storyBy: '',
                    producedBy: '',
                    cinematography: '',
                    editedBy: '',
                    musicBy: '',
                    productionCompany: '',
                    distributedBy: '',
                    releaseDate: '',
                    movieCat,
                    movieLang,
                    runningTime: '',
                    country: '',
                    budget: '',
                    boxOfficeCollection: '',
                    imdbRating,
                    buttonText: 'Created'
                });
               
                toast.success('Movie Created Successfully');


            })
            .catch(error => {
                console.log('ERROR ON SAVING MOVIE IN DATABASE', error.response.data.error);
                setMovie({ ...movie, buttonText: 'Create' });
                
                toast.error(error.response.data.error);
            });
    };
    return (
        <AdminLayout>
         <ToastContainer />
            <div className="newUser">
                <h1 className="newUserTitle">Create Movie Description</h1>
                <form className="newUserForm">
                    <div className="newUserItem">
                        <label>Movie Name</label>
                        <input type="text" placeholder="Avengers" onChange={handleChange('name')} value={name} />
                    </div>
                    <div className="newUserItem">
                        <label>Directed By</label>
                        <input type="text" placeholder="Director name" onChange={handleChange('directedBy')} value={directedBy} />
                    </div>
                    <div className="newUserItem">
                        <label>writtenBy</label>
                        <input type="text" placeholder="Written by" onChange={handleChange('writtenBy')} value={writtenBy} />
                    </div>
                    <div className="newUserItem">
                        <label>Screen Play By</label>
                        <input type="text" placeholder="Screen Play By" onChange={handleChange('screenplayBy')} value={screenplayBy} />
                    </div>
                    <div className="newUserItem">
                        <label>Story By</label>
                        <input type="text" placeholder="Story By" onChange={handleChange('storyBy')} value={storyBy} />
                    </div>
                    <div className="newUserItem">
                        <label>Produced By</label>
                        <input type="text" placeholder="Produced By" onChange={handleChange('producedBy')} value={producedBy} />
                    </div>

                    <div className="newUserItem">
                        <label> Cinematography</label>
                        <input type="text" placeholder="Cinematography" onChange={handleChange('cinematography')} value={cinematography} />
                    </div>
                    <div className="newUserItem">
                        <label>Edited By</label>
                        <input type="text" placeholder="Edited By" onChange={handleChange('editedBy')} value={editedBy} />
                    </div>
                    <div className="newUserItem">
                        <label>Music By</label>
                        <input type="text" placeholder="Music By" onChange={handleChange('musicBy')} value={musicBy} />
                    </div>
                    <div className="newUserItem">
                        <label>Production Company</label>
                        <input type="text" placeholder="Production By" onChange={handleChange('productionCompany')} value={productionCompany} />
                    </div>

                    <div className="newUserItem">
                        <label>Distributed By</label>
                        <input type="text" placeholder="Distributed By" onChange={handleChange('distributedBy')} value={distributedBy} />
                    </div>
                    <div className="newUserItem">
                        <label>Release date</label>
                        <input type="date" placeholder="Release Date" onChange={handleChange('releaseDate')} value={releaseDate} />
                       
                    </div>

                    <div className="newUserItem">
                        <label>Running Time</label>
                        <input type="text" placeholder="Running Time" onChange={handleChange('runningTime')} value={runningTime} />
                    </div>

                    <div className="newUserItem">
                        <label>Countrty</label>
                        <input type="text" placeholder="Country Time" onChange={handleChange('country')} value={country} />
                    </div>


                    <div className="newUserItem">
                        <label>Budget</label>
                        <input type="text" placeholder="Budget" onChange={handleChange('budget')} value={budget} />
                    </div>

                    <div className="newUserItem">
                        <label>Box Office Collection </label>
                        <input type="text" placeholder="Box Office Collection" onChange={handleChange('boxOfficeCollection')} value={boxOfficeCollection} />
                    </div>

                    
                    <div className="newUserItem">
                        <label>IMDB Rating </label>
                        <input type="text" placeholder="Box Office Collection" onChange={handleChange('imdbRating')} value={imdbRating} />
                    </div>

                    <div className="newUserItem">
                        <label > Choose Movie Image</label>
                        <input type="file" filename = "movieImage"
                         onChange={onChangeFile} />
                    </div>

                    <div className="newUserItem">
                        <label>Category</label>
                        <select className="newUserSelect" name="active" onChange={handleChange('movieCat')} value={movieCat} id="active">
                         {
                            categories.map(cat => (
                               <option value={cat.name}>{cat.name}</option>          
                            ))
                          }
                       </select>
                   </div>

                   <div className="newUserItem">
                        <label>Language</label>
                        <select className="newUserSelect" name="active" onChange={handleChange('movieLang')} value={movieLang}  id="active">
                         {
                            languages.map(lang => (
                               <option value={lang.value}>{lang.value}</option>          
                            ))
                          }
                       </select>
                   </div>


                    <button className="newUserButton" onClick={clickSubmit}>{buttonText}</button>
                </form>
            </div>
        </AdminLayout>

    );
}
