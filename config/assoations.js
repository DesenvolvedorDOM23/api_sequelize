const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Cap = require("../models/Caps");
const Spaceship = require("../models/Spaceship");



// Planet.hasOne(Satelite, { onDelete: "CASCADE", OnUpdate: "CASCADE" });
// Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

Planet.hasMany(Satelite, { onDelete: "CASCADE", OnUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

Cap.belongsToMany(Spaceship, {
    foreignKey: "capId",
    through: "capspaceship",
    as: "spaceship",
});

Cap.belongsToMany(Cap, {
    foreignKey: "spaceshipId",
    through: "capspaceship",
    as: "caps",
});
module.exports = { Planet, Satelite };