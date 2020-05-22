import React, { useState, useEffect } from 'react'
import axios from 'axios';
import OnePet from './OnePet';


const AllPets = (props) => {
    const [pets, setPets] = useState([]);


    const fetchPets = () => {
    axios.get("http://localhost:8000/api/pet")
    .then(res=> {
        console.log(res);
        setPets(res.data);
    })
    .catch(err=>console.log(err))
}

    const deleteOne = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                fetchPets();
            })
            .catch(err => console.log(err))

}




    useEffect(()=>{
    fetchPets();

}, [])

return (

    <div>
        {pets.map( x => <OnePet key= {x._id} pet={x} handleDelete = {deleteOne}/>
        
        )}
    
    </div>
    
    
        
)

    
}

export default AllPets;