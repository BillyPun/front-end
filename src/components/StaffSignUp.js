import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StaffSignUp = () => {
    const [username, setUsernameName] = useState("");
    const [password, setPassword] = useState("");
    const [signupcode, setSignUpCode] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem('staffs');
        if (auth) {
            navigate('/staffdog')
        }

    }, [])

    const collectData = async () => {
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ username, password ,signupcode}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.clear();
        localStorage.setItem("staffs", JSON.stringify(result));
        navigate('/staffdog')

    }


    return (
        <div className="register">
            <h1>Staff Sign Up</h1>
            <input className="inputBox" type="text" value={username} onChange={(e) => setUsernameName(e.target.value)} placeholder="Enter Username" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <input className="inputBox" type="text" value={signupcode} onChange={(e) => setSignUpCode(e.target.value)} placeholder="Enter Sign Up Code" />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default StaffSignUp;