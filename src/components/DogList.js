import React, { useEffect, useState } from "react";

const DogList = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        getDogs();
    }, [])

    const getDogs = async () => {
        let result = await fetch('http://localhost:5000/dogs');
        result = await result.json();
        setDogs(result);

    }
    console.warn("dogs",dogs);

    const searchHandle = async (event) => {
        let key = event.target.value;
        if(key){
            let result = await fetch('http://localhost:5000/search/' + key);
        result = await result.json();
        if (result) {
            setDogs(result);
        }}else{
            getDogs()
        }
        
    };


    return (
        <div className="dog-list">
            <h3>Dog List</h3>
            <input type="text" className="search-dog-box" placeholder='Search Dog' onChange={searchHandle}/>
            <ul>
                <li>No.</li>
                <li>Dog name</li>
                <li>Dog Type</li>
                <li>Dog Age</li>
                <li>Dog Detail</li>
            </ul>
            {
                dogs.length>0 ?dogs.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.dog_name}</li>
                        <li>{item.dog_type}</li>
                        <li>{item.dog_age}</li>
                        <li>{item.dog_detail}</li>                      
                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}


export default DogList;