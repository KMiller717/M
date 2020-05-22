import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const NewPet = (props) =>{

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill_one, setSkill_one] = useState("")
    const [skill_two, setSkill_two] = useState("")
    const [skill_three, setSkill_three] = useState("")
    const [errors, setErrors] = useState([]);

    const addPet = (e) => {
        e.preventDefault();
        const newpet = {name, type, description, skill_one, skill_two, skill_three};
        axios.post("http://localhost:8000/api/pet", newpet)
            .then(res => {
            console.log(res)
            if(res.data.errors) {
                setErrors(res.data.errors);
            } else {
                navigate("/")
            }
            })
            .catch(err => console.log(err))
            
    }


    return (
<div className="row">
    <div className="col col-4">
    <form onSubmit = {addPet}>
        <div className="form-group">
        <p>Name: <input className="form-control" type="text" onChange = { e => setName(e.target.value) } /></p>
        {
            errors.name ? 
            <p>{errors.name.message}</p>:
            ""
        }
        </div>
        <div className="form-group">
        <p>Type: <input className="form-control" type="text" onChange = { e => setType(e.target.value) } /></p>
        {
            errors.type ? 
            <p>{errors.type.message}</p>:
            ""
        }
        </div>
        <div className="form-group">
        <p>Description: <input className="form-control" type="text" onChange = { e => setDescription(e.target.value) } /></p>
        {
            errors.description ? 
            <p>{errors.description.message}</p>:
            ""
        }
        </div>
        
        <div className="form-group">
        <p>Skill One <input className="form-control" type="text" onChange = { e => setSkill_one(e.target.value) } /></p>
        {
            errors.skill_one ? 
            <p>{errors.skill_one.message}</p>:
            ""
        }
        </div>
        <div className="form-group">
        <p>Skill Two: <input className="form-control" type="text" onChange = { e => setSkill_two(e.target.value) } /></p>
        {
            errors.skill_two ? 
            <p>{errors.skill_two.message}</p>:
            ""
        }
        </div>
        <div className="form-group">
        <p>Skill Three: <input className="form-control" type="text" onChange = { e => setSkill_three(e.target.value) } /></p>
        {
            errors.skill_three ? 
            <p>{errors.skill_three.message}</p>:
            ""
        }
        </div>
        <input className="btn btn-outline-primary" type="submit" />
        
    </form>
    </div>
    </div>
    )




}


export default NewPet;