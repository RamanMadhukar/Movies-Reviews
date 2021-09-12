import "./LanguageList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';
import { isAuth, getCookie, signout, updateUser } from '../../auth/helpers';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Container, Grid } from "@material-ui/core";
export default function List() {
    const [languages, setLanguages] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        getLanguages();
    }, [reload]);
    const token = getCookie('token');

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

    const handleDelete = (slug) => {
        axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API}/language/${slug}`,
            headers: {
                Authorization: `Bearer ${token}`
              },
        })
            .then(response => {
                console.log(response);
                let rel = reload;
                rel === false ? setReload (true) : setReload(false)
                setReload(true)
                return response.json();
            
            })
            .catch(error => {
                console.log('Languages are not found');
            });
        // setCategories(data.filter((item) => item.id !== id));
        
    };

    const columns = [
        { field: "id", headerName: "ID", width: 200 },
        {
            field: "name",
            headerName: "Name",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "slug", headerName: "Slug", width: 150 },

        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.slug)}
                        />
                    </>
                );
            },
        },
    ];



    return (
        <AdminLayout>


         
              
        
                    <div className="userList">
                            <DataGrid
                                rows={
                                    languages.map(lang => (
                                        { id: lang._id, name: lang.value, slug: lang.slug }
                                    ))
                                }
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={8}
                                checkboxSelection
                            />
                        </div>
                    
                
          

        </AdminLayout>

    );
}
