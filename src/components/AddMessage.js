import React from "react";

const AddMessage = () => {

    const [dog_name, setDog_name] = React.useState('');
    const [user_message, setMessage] = React.useState('');
    const [user_name, setUser_name] = React.useState('');

    const addMessage = async () => {



        console.warn(user_name, dog_name, user_message);
        let result = await fetch('http://localhost:5000/add-chatbox', {
            method: 'post',
            body: JSON.stringify({ user_name, dog_name, user_message }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);

    }

    return (
        <div className="dog">
            <h1>Add Message</h1>

            <input type="text" className="inputBox" placeholder='Enter User Name' onChange={(e) => setUser_name(e.target.value)} value={user_name} />
            <input type="text" className="inputBox" placeholder='Enter Dog Name' onChange={(e) => setDog_name(e.target.value)} value={dog_name} />
            <input type="text" className="inputBox" placeholder='Enter Message' onChange={(e) => setMessage(e.target.value)} value={user_message} />


            <button onClick={addMessage} className="appButton" type="button">Add Message</button>
        </div>
    )
}


export default AddMessage;