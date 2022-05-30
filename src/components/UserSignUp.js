import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
    const [username, setUsernameName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem('users');
        if (auth) {
            navigate('/')
        }

    }, [])

    const collectData = async () => {
        let result = await fetch('http://localhost:5000/register2', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.clear();
        localStorage.setItem("users", JSON.stringify(result));
        navigate('/')

    }


    return (
        <div className="register">
            <h1>User Sign Up</h1>
            <input className="inputBox" type="text" value={username} onChange={(e) => setUsernameName(e.target.value)} placeholder="Enter Username" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default UserSignUp;