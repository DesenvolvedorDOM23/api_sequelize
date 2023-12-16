//metodos utilizados na API
const Planet = require("../models/Planet");
module.exports = {
    async store(req, res) {
        const { name, position } = req.body;
        const planet = await Planet.create({ name, position });
        return res.json(planet);
    },

    async index(req, res) {
        const planets = await Planet.findAll();
        return res.json(planets);
    },

    async put(req, res) {
        const { name, position } = req.body;
        await Planet.update(
            { name, position },
            {
                where: {
                    id: req.params.id,
                },
            },

        );
        return res.send("planeta Atualizado com Sucesso!");
    },

    async delete(req, res) {
        const { name, position } = req.body;
        await Planet.destroy(
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send("Success! Planeta excluido");

    },


}