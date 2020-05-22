import React, { useState } from "react";
import {Link} from "@reach/router";
import axios from 'axios';
import {navigate} from '@reach/router';



const OnePet = (props) => {

        
    var [isdisabled, setDisabled] = useState(false)
    

    const handleClick = (e) => {
        e.preventDefault();
        setDisabled(!isdisabled); 
    }


    return (

    <div className="row">
        <div className="card col-md-4" >
            <div className="card-body">
                <Link to={"/pet/show/" + props.pet._id } className="btn btn-primary">Display</Link>
                <h5 className="card-title">{props.pet.name}</h5>
                <p className="card-text">Type: {props.pet.type}</p>
                <p className="card-text">Description: {props.pet.description}</p>
                <p className="card-text">Skill One: {props.pet.skill_one}</p>
                <p className="card-text">Skill Two: {props.pet.skill_two}</p>
                <p className="card-text">Skill Three: {props.pet.skill_three}</p>
                
                <Link to={"/edit/" + props.pet._id } className="btn btn-primary">Edit</Link>
                <button className="btn btn-outline-danger" onClick ={(e)=> props.handleDelete(e, props.pet._id)}>Adopt Pet</button>
                <button className="btn btn-success" onClick={handleClick} disabled={isdisabled}>Like</button> 
            </div>
        </div>
    </div>


    );



}

export default OnePet;