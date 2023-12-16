const Spaceship = require("../models/Spaceship");
const Cap = require("../models/Caps");

module.exports = {
    async store(req, res) {
        const { capId } = req.params;
        const { name, capacity } = req.body;

        const cap = await Cap.findByPk(capId);
        if (!capId) {
            res.send("Error, this cap does exist !");

        }
        const [spaceship] = await Spaceship.findOrCreate({
            where: { name, capacity },
        });
        await cap.addSpaceship(spaceship);
        return res.json(spaceship);
    },
    async index(req, res) {
        const { capId } = req.params;

        const cap = await Cap.findByPk(capId, {
            include: { association: "spaceship" },
        });
        return res.json(cap);
    }
}