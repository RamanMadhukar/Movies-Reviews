import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useHistory, useParams, Link, Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { isAuth, getCookie, signout, updateUser } from '../../auth/helpers';
import axios from 'axios';
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "./User.css";
const initialvalues = {
  name: '',
  email: '',
  role: '',
  buttonText: 'Update'
}
const User = () => {
  const [user, setUser] = useState(initialvalues);
  const token = getCookie('token');

  const { userId } = useParams()
  let history = useHistory();

  useEffect(() => {
    loadProfile();
  }, []);


  const loadProfile = () => {
    axios({
      method: 'GET', 
      url: `${process.env.REACT_APP_API}/user/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }

    })
      .then(response => {
        console.log('PRIVATE PROFILE UPDATE', response); 
        const { role, name, email } = response.data;
        setUser({ ...user, role, name, email});
        console.log(user)
      })
      .catch(error => {
        console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);

      });
  };
  const { role, name, email, buttonText } = user;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setUser({ ...user, [name]: event.target.value });
    };

    const clickSubmit = event => {
      event.preventDefault();
      setUser({ ...user, buttonText: 'Updating' }); 
      axios({
          method: 'PATCH',
          url: `${process.env.REACT_APP_API}/admin/updates/${userId}`,
          
          headers: {
              Authorization: `Bearer ${token}`
          },
          data: { name, email, role }
      })
          .then(response => {
              console.log('PRIVATE PROFILE UPDATE SUCCESS', response);
              setUser({ ...user, buttonText: 'Updated' });
                 toast.success('Profile Updated Successfully');
              
              
          })
          .catch(error => {
              console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
              setUser({ ...user, buttonText: 'Update' });
              toast.error(error.response.data.error);
          });
  };

  return (
    
    <AdminLayout>
    <ToastContainer />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">

          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    onChange={handleChange('name')} 
                    className="userUpdateInput"
                    value={user.name}

                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    onChange={handleChange('email')} 
                    value={user.email}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Role</label>
                  <input
                    type="text"
                    onChange={handleChange('role')} 
                    value={user.role}
                    className="userUpdateInput"
                  />
                </div>

                <button className="userUpdateButton" onClick={clickSubmit}>Update</button>

              </div>
            
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>

  );



}

export default User


