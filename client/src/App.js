import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Activate from './auth/Activate';
import Signin from './auth/Signin';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Signup from "./auth/Signup";
import Private from './core/Private';
import Home from './Pages/Home/Home';
import Admin from './core/Admin';
import Forgot from './auth/Forgot';
import Reset from './auth/Reset';
import UserList from './Pages/userList/UserList';
import ProductList from './Pages/productList/ProductList';
import AdminHome from './admin/AdminHome/AdminHome';
import User from './Pages/user/User';
import NewUser from './Pages/newUser/NewUser';
import Product from './Pages/product/Product';

import CatAndTag from './Pages/catTag/CatAndTag';
import List from './Pages/List/List';
import LanguageList from './Pages/LanguageList/LanguageList';
import CreateMovie from './Pages/createMovie/CreateMovie';
import MovieList from './Pages/movieList/MovieList';
import UpdateMovie from './Pages/updateMovie/UpdateMovie';
import ImageUpload from './Pages/imageUpload/ImageUpload';
import Description from './Pages/movieDescrption/Description';
import AllMovies from './Pages/AllMovies/AllMovies';
import AllMovieComponent from './components/AllMovieComponent/AllMovieComponent';





function App() {
  return (
    <>
    

<BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/auth/activate/:token" exact component={Activate} />
                <PrivateRoute path="/private" exact component={Private} />
                
                <Route path="/auth/password/forgot" exact component={Forgot} />
                <Route path="/auth/password/reset/:token" exact component={Reset} />
             
                <AdminRoute path="/admin" exact component={Admin} />
                <AdminRoute path="/admin/users" exact component={UserList} />
                <AdminRoute path="/user/:userId" exact component={User} />
                <AdminRoute path="/admin/products" exact component={ProductList} />
                <AdminRoute path="/newUser" exact component={NewUser} />
                <AdminRoute path="/product/:id" exact component={Product} />
                <AdminRoute path="/cat-tag" exact component={CatAndTag} />
                <AdminRoute path="/list" exact component={List} />
                <AdminRoute path="/languages" exact component={LanguageList} />
                <AdminRoute path="/create-movie" exact component={CreateMovie} />
                <AdminRoute path="/movieList" exact component={MovieList} />
                <AdminRoute path="/movie/:movieId" exact component={UpdateMovie} />
                <AdminRoute path="/image" exact component={ImageUpload} />
                <Route path="/description" exact component={Description} />
                <Route path="/all-Movies" exact component={AllMovies} />
                
               
              
              
            </Switch>
        </BrowserRouter>



    </>
   
    
  );
}

export default App;
