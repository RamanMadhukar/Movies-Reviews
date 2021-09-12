import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from "../../components/AdminLayout/AdminLayout";
export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      getUsers();
  }, []);

  const getUsers = () => {
    axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API}/admin/users`
    })
        .then(response => {
            console.log(response);
            setUsers(response.data)
        })
        .catch(error => {
            console.log('Users are not found', error.response.data.error);
        });
};

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    alert("item for delete")
  };
   
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
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
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "role",
      headerName: "Role",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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
              users.map(user =>(
                {id: user._id, name: user.name, email: user.email, role: user.role, status: "active"}
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
