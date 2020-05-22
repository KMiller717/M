
const mongoose = require('mongoose'),
Pet = require("../models/pet.model")



class PetController{
index(req, res){
    Pet.find().sort({ type: "ascending" })
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err))
}
create(req, res){
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.json(err))
}
show(req, res){
    Pet.findById({_id:req.params.id})
        .then(onePet => res.json(onePet))
        .catch(err=> res.json(err))
}
update(req, res){
    console.log(req.body)
    Pet.findOneAndUpdate({_id:req.params.id}, req.body,{runValidators: true})
        .then(editPet => res.json({msg:"Success"}))
        .catch(err=> {res.json(err)
            console.log(err)})
    
}
remove(req, res){
    Pet.deleteOne({_id:req.params.id})
        .then(msg => res.json(msg))
        .catch(err=>res.json(err))
}
}

module.exports = new PetController();