import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const EditPet = (props) =>{

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
    
    
    
    const updatePet = (e) => {
        e.preventDefault();
        const newpet = {name, type, description, skill_one, skill_two, skill_three};
        console.log("something")
        axios.put(`http://localhost:8000/api/pet/${props._id}`, newpet)
            .then(res => {
                console.log(res.data)
                console.log("something")
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrors(res.data.errors);
                } else {
                    navigate("/")
                }
                })
                .catch(err => console.log(err))
            
    }


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
    <div className="col col-sm-4 justify-content-center">

    <form onSubmit = {updatePet}>
        <div className="form-group">
        <p>Name: <input className="form-control" type="text" onChange = { e => setName(e.target.value) } value={name} /></p>
        {
            errors.name ? 
            <p>{errors.name.message}</p>:
            ""
        }
        </div>
        <div className="form-group">
        <p>Type: <input className="form-control" type="text" onChange = { e => setType(e.target.value) } value={type} /></p>
        {
            errors.type ? 
            <p>{errors.type.message}</p>:
            ""
        }
        </div>
        <div className="form-group">
        <p>Description <input className="form-control" type="text" onChange = { e => setDescription(e.target.value) } value={description} /></p>
        {
            errors.description ? 
            <p>{errors.description.message}</p>:
            ""
        }
        </div>
        <div className="form-group">
        <p>Skill One: <input className="form-control" type="text" onChange = { e => setSkill_one(e.target.value) } value={skill_one} /></p>
        </div>
        <div className="form-group">
        <p>Skill Two: <input className="form-control" type="text" onChange = { e => setSkill_two(e.target.value) } value={skill_two} /></p>
        </div>
        <div className="form-group">
        <p>skill_three <input className="form-control" type="text" onChange = { e => setSkill_three(e.target.value) } value={skill_three} /></p>
        </div>
        <input className="btn btn-outline-primary" type="submit" value="Update Pet Info" />
        <button className="btn btn-outline-danger" onClick = {deletePet}>Adopt Pet</button>
        
    </form>
    </div>
    </div>
    )




}


export default EditPet;