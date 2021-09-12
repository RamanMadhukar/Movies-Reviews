import React from 'react'
import './Topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { isAuth, signout } from '../../auth/helpers';

const Topbar = () => {
    const history = useHistory()
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                    <Link to="/">
                      Harsh
                    </Link>
                        
                    </div>
                </div>
                <div className="topRight">

                    <div className="topbarIconContainer">
                    <span
                    onClick={() => {
                      signout(() => {
                        history.push("/")
                      })
                    }}
                  >
                      <i class="fas fa-2x fa-sign-out-alt"></i>
                  </span>
                       
                    </div>

                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQETWNjJfszA0A/profile-displayphoto-shrink_800_800/0/1599828107411?e=1632355200&v=beta&t=9hsS4IalHi2gESgTlBhEkeOjxZrmT9OeSN0NsHnTurk" alt="" className="topAvator" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
