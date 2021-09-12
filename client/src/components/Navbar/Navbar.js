import React, { Fragment, Component } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import './Navbar.css';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { isAuth, signout } from '../../auth/helpers';



class Navbar extends Component {

  state = { clicked: false }

  handelClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
   
    return (
      <>
        <Nav>
          <NavLink to='/' >
            <img src="../../../images/uploads/logo1.png" className="navLogo" />
          </NavLink>

          <Bars onClick={this.handelClick} >
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </Bars>

          <NavMenu className={this.state.clicked ? 'menu' : ''}>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/all-movies' activeStyle>
              All Movies
            </NavLink>
            
            {!isAuth() && (
              <Fragment>
            
                  <NavLink to="/signin" >
                    Signin
                  </NavLink>
                
                  <NavLink to="/signup" >
                    Signup
                  </NavLink>
                

              </Fragment>
            )}

            {isAuth() && isAuth().role === 'admin' && (
           
                <NavLink to="/admin">
                  {isAuth().name}
                </NavLink>
            
            )}
            {isAuth() && isAuth().role === 'user' && ( 
                <NavLink to="/private">
                  {isAuth().name}
                </NavLink>
            )}
          
            

          </NavMenu>



        </Nav>
      </>
    );
  };
}

export default Navbar;