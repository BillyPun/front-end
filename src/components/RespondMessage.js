import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RespondMessage = () => {
    const [staff_respond, setStaff_respond] = React.useState('');
    const [dog_name, setDog_name] = React.useState('');
    const [user_name, setUser_name] = React.useState('');
    const [user_message, setUser_message] = React.useState('');
const params = useParams();
const navigate = useNavigate();

useEffect(()=>{

    getMessageDetails();
},[])

const getMessageDetails = async()=>{
        console.warn(params)
        let result = await fetch('http://localhost:5000/messages/'+params.id);
        result = await result.json();
        setDog_name(result.dog_name)
        setUser_name(result.user_name)
        setUser_message(result.user_message)
        setStaff_respond(result.staff_respond)
}

    const updateRespond = async () => {
        console.warn(user_name, dog_name, user_message, staff_respond)
        let result = await fetch('http://localhost:5000/messages/'+params.id, {
            method: 'Put',
            body: JSON.stringify({ user_name, dog_name, user_message,staff_respond }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        navigate('/staffmessagelist')
    }

    return (
        <div className="dog">
            <h1>Respond Messag</h1>



            <input type="text" className="inputBox" placeholder='Respond to user' onChange={(e) => setStaff_respond(e.target.value)} value={staff_respond} />

            <button onClick={updateRespond} className="appButton" type="button">Respond User</button>
        </div>
    )
}


export default RespondMessage;