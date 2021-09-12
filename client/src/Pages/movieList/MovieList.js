import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import './MovieList.css'

const MovieList = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
      getMovies();
  }, []);

  const getMovies = () => {
    axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API}/movies`
    })
        .then(response => {
            console.log(response);
            setMovies(response.data)
        })
        .catch(error => {
            console.log('Movies not found', error.response.data.error);
        });
};

const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    alert("item for delete")
  };

const columns = [
    { field: "id", headerName: "Slug", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
          <img className="productListImg" src={`/uploads/${params.row.img}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },

    
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/movie/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
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
              movies.map(movie =>(
                {id: movie.slug,  name: movie.name, img: movie.movieImage}
            ))
           }
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
        </AdminLayout>
    )
}

export default MovieList



