const express = require("express");
const cors = require("cors");
const app = express();

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permitir accesar desde un origen distinto
app.use (
    cors( {
        origin: "http://localhost:3000",
    })
)

//Inicilizamos BD
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/pet.routes");
misRutas(app);

//Ejecutamos server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));