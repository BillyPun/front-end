import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateDogs = () => {

    const [dog_name, setDog_name] = React.useState('');
    const [dog_type, setDog_type] = React.useState('');
    const [dog_age, setDog_age] = React.useState('');
    const [dog_detail, setDog_detail] = React.useState('');
const params = useParams();
const navigate = useNavigate();

useEffect(()=>{

    getDogDetails();
},[])

const getDogDetails = async()=>{
        console.warn(params)
        let result = await fetch('http://localhost:5000/dogs/'+params.id);
        result = await result.json();
        setDog_name(result.dog_name)
        setDog_type(result.dog_type)
        setDog_age(result.dog_age)
        setDog_detail(result.dog_detail)
}

    const updateDog = async () => {
        console.warn(dog_name, dog_type, dog_age, dog_detail)
        let result = await fetch('http://localhost:5000/dogs/'+params.id, {
            method: 'Put',
            body: JSON.stringify({ dog_name, dog_type, dog_age,dog_detail }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        navigate('/staffdog')
    }

    return (
        <div className="dog">
            <h1>Update Dog</h1>
            <input type="text" className="inputBox" placeholder='Enter Dog Name' onChange={(e) => setDog_name(e.target.value)} value={dog_name} />

            <input type="text" className="inputBox" placeholder='Enter Dog Type' onChange={(e) => setDog_type(e.target.value)} value={dog_type} />

            <input type="text" className="inputBox" placeholder='Enter Dog Age' onChange={(e) => setDog_age(e.target.value)} value={dog_age} />

            <input type="text" className="inputBox" placeholder='Enter Dog Detail' onChange={(e) => setDog_detail(e.target.value)} value={dog_detail} />

            <button onClick={updateDog} className="appButton" type="button">Update Dog</button>
        </div>
    )
}


export default UpdateDogs;