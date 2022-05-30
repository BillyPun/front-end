import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MessageListForStaff = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages();
    }, [])

    const getMessages = async () => {
        let result = await fetch('http://localhost:5000/messages');
        result = await result.json();
        setMessages(result);

    }



    const deleteItem = async (id) => {
        let result = await fetch('http://localhost:5000/messages/' + id, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            getMessages();
        }
    };

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch('http://localhost:5000/search-message/' + key);
            result = await result.json();
            if (result) {
                setMessages(result);
            }
        } else {
            getMessages()
        }

    };



    return (
        <div className="dog-list">
            <h3>Message List</h3>
            <input type="text" className="search-dog-box" placeholder='Search Message' onChange={searchHandle}/>
            <ul>
            <li>No.</li>
                <li>User name</li>
                <li>Dog Name</li>
                <li>Message</li>
                <li>Respond </li>
                <li>Control</li>
            </ul>
            {
                messages.length>0 ?messages.map((item, index) =>
                    <ul key={item._id}>

                        <li>{index + 1}</li>
                        <li>{item.user_name}</li>
                        <li>{item.dog_name}</li>
                        <li>{item.user_message}</li>
                        <li>{item.staff_respond}</li>
                        <li><button onClick={() => deleteItem(item._id)}>Delete</button>
                            <Link to={"/respond/" + item._id}>Respond</Link>
                        </li>
                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}


export default MessageListForStaff;