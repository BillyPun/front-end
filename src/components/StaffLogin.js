import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const StaffLogin = () => {
    const [username, setUsernameName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('staffs');
        if (auth) {
            navigate("/staffdog")
        }

    })

    const handleLogin = async () => {
        console.warn(username, password)
        let result = await fetch('http://localhost:5000/stafflogin', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        localStorage.clear();
        console.warn(result)

        if (result.username) {
            localStorage.setItem("staffs", JSON.stringify(result));
            navigate("/staffdog")

        } else {
            alert("Please enter connect details")
        }
    }


    return (
        <div className="login">
            <h1>Staff Login</h1>
            <input type="text" className="inputBox" placeholder='Enter Username'
                onChange={(e) => setUsernameName(e.target.value)} value={username} />
            <input type="password" className="inputBox" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className="appButton" type="button">Login</button>
        </div>
    )
}


export default StaffLogin
