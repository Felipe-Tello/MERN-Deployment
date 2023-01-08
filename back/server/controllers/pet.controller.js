const Pet = require("../models/pet.model");

module.exports.get_all = (req, res) => {
    
    Pet.find()
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json(err));
}

module.exports.create_pet = (req, res) => {
    Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

module.exports.get_pet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

module.exports.update_pet = (req, res) => {
    Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_pet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_all = (req, res) => {
    Pet.deleteMany({})
        .then(pet => {
            res.send({
                message: `${data.deletedCount} Pets were deleted successfully!`
            });
        })
        .catch(err => res.status(400).json(err));
}