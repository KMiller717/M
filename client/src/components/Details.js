import React, { useState, useEffect } from "react";
import {Link} from "@reach/router";
import axios from 'axios';
import {navigate} from '@reach/router';



const Details = (props) => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill_one, setSkill_one] = useState("")
    const [skill_two, setSkill_two] = useState("")
    const [skill_three, setSkill_three] = useState("")
    const [errors, setErrors] = useState([]);

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/show/${props._id}`)
        .then(res=> {
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill_one(res.data.skill_one);
            setSkill_two(res.data.skill_two);
            setSkill_three(res.data.skill_three);
        console.log(res);
    })
    .catch(err=>console.log(err))

    }, []);

    const deletePet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))

    }
    
    return (

    <div className="row">
        <div className="card col-md-4" >
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Type: {type}</p>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Skill One: {skill_one}</p>
                <p className="card-text">Skill Two: {skill_two}</p>
                <p className="card-text">Skill Three: {skill_three}</p>
                
                <button className="btn btn-outline-danger" onClick ={deletePet}>Adopt Pet</button>
            </div>
        </div>
    </div>


    );



}

export default Details;