const PetController = require("../controllers/pet.controller");

module.exports = app => {
    app.post("/api/pets", PetController.create_pet);

    app.get("/api/pets", PetController.get_all);

    app.get("/api/pets/:id", PetController.get_pet);

    app.put("/api/pets/:id", PetController.update_pet);

    app.delete("/api/pets/:id", PetController.delete_pet);

    app.delete("/api/pets", PetController.delete_all);
}