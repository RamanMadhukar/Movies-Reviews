import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Topbar from '../admin/Topbar/Topbar'
import Sidebar from '../admin/Sidebar/Sidebar'
import './Admin.css'
import AdminHome from '../admin/AdminHome/AdminHome'
import AdminRoute from '../auth/AdminRoute'
import UserList from '../Pages/userList/UserList';
import User from '../Pages/user/User';
import NewUser from '../Pages/newUser/NewUser';
import ProductList from '../Pages/productList/ProductList';
import Product from '../Pages/product/Product';

import AdminLayout from '../components/AdminLayout/AdminLayout';

const Admin = () => {
    return (
      <AdminLayout>
        <AdminHome />
      </AdminLayout>
      //   <BrowserRouter>
      //   <Topbar />
      //   <div className="container">
      //     <Sidebar /> 
      //     <AdminHome />
         
      //       {/* <AdminRoute exact path="/admin">
      //         <AdminHome />
      //       </AdminRoute>
      //       <Route exact path="/admin/users">
      //         <UserList />
      //       </Route>
      //       <AdminRoute path="/user/:userId">
      //         <User />
      //       </AdminRoute>
      //       <AdminRoute path="/newUser">
      //         <NewUser />
      //       </AdminRoute>
      //       <AdminRoute path="/admin/products">
      //         <ProductList />
      //       </AdminRoute>
      //       <AdminRoute path="/product/:productId">
      //         <Product />
      //       </AdminRoute>
      //       <AdminRoute path="/newproduct">
      //         <NewProduct />
      //       </AdminRoute>
      //     */}
      //   </div>
      // </BrowserRouter>
    )
}

export default Admin
