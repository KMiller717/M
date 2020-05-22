const PetController = require('../controllers/pet.controller');
module.exports = function(app){
    app.get('/api/pet', PetController.index);
    app.post('/api/pet', PetController.create);
    app.get('/api/pet/show/:id', PetController.show);
    app.put('/api/pet/:id', PetController.update);
    app.delete('/api/pet/:id', PetController.remove);
}