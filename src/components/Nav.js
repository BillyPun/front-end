import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

    const auth = localStorage.getItem('staffs');
    const auth2 = localStorage.getItem('users');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
    return (
        <div>
            {auth ? <ul className="nav-ul">
                <li><Link to="/staffdog">Dog List (For Staff)</Link></li>
                <li><Link to="/add">Add Dog</Link></li>
                <li><Link to="/staffmessagelist">Message List (For Staff)</Link></li>
                <li><Link onClick={logout} to="/">Logout {JSON.parse(auth).name}</Link></li>
            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/">Dog List</Link></li>
                    <li><Link to="/staffsignup">Staff Sign Up</Link></li>
                    <li><Link to="/stafflogin">Staff Login</Link></li>

                </ul>
            }
            {auth2 ? <ul className="nav-ul">
            <li><Link to="/">Dog List</Link></li>
            <li><Link to="/addmessage">Add message</Link></li>
            <li><Link to="/messagelist">Message List</Link></li>
                <li><Link onClick={logout} to="/">Logout {JSON.parse(auth2).name}</Link></li>
            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/usersignup">User Sign Up</Link></li>
                    <li><Link to="/userlogin">User Login</Link></li>

                </ul>
            }
        </div>





    )
}

export default Nav;