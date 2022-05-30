import React from "react";

const AddDog = () => {

    const [dog_name, setDog_name] = React.useState('');
    const [dog_type, setDog_type] = React.useState('');
    const [dog_age, setDog_age] = React.useState('');
    const [dog_detail, setDog_detail] = React.useState('');
    const [error, setError] = React.useState(false);
    const addDog = async () => {


        console.warn(!dog_name);
        if(!dog_name || !dog_type|| !dog_age|| !dog_detail)
        {
            setError(true)
            return false;
        }




        console.warn(dog_name, dog_type, dog_age, dog_detail);
        let result = await fetch('http://localhost:5000/add-dog', {
            method: 'post',
            body: JSON.stringify({ dog_name, dog_type, dog_age, dog_detail}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        
    }

    return (
        <div className="dog">
            <h1>Add Dog</h1>
            <input type="text" className="inputBox" placeholder='Enter Dog Name' onChange={(e) => setDog_name(e.target.value)} value={dog_name} />
            {error && !dog_name &&<span className="invalid-input">Plase enter valid dog name</span>}
            <input type="text" className="inputBox" placeholder='Enter Dog Type' onChange={(e) => setDog_type(e.target.value)} value={dog_type} />
            {error && !dog_type &&<span className="invalid-input">Plase enter valid dog type</span>}           
            <input type="text" className="inputBox" placeholder='Enter Dog Age' onChange={(e) => setDog_age(e.target.value)} value={dog_age} />
            {error && !dog_age &&<span className="invalid-input">Plase enter valid dog age</span>}            
            <input type="text" className="inputBox" placeholder='Enter Dog Detail' onChange={(e) => setDog_detail(e.target.value)} value={dog_detail} />
            {error && !dog_detail &&<span className="invalid-input">Plase enter valid dog detail</span>}   
            <button onClick={addDog} className="appButton" type="button">Add Dog</button>
        </div>
    )
}


export default AddDog;