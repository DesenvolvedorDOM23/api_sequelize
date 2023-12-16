

const express = require("express");
const routes = express.Router();
const PlanetController = require("../controller/PlanetsController");
const SateliteController = require("../controller/SateliteController");
const CapController = require("../controller/CapsController");
const SpaceshipsController = require("../controller/SpaceShipsController");

const { route } = require("express/lib/application");
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/caps/:capId/spaceships", SpaceshipsController.store)
routes.get("/caps/:capId/spaceships", SpaceshipsController.index);
module.exports = routes;