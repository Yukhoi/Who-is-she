const { Op } = require('sequelize');

const model = require('../models');

function save(req, res) {
    const country = {
        name: req.body.name,
    };
    console.log(country);
    model.Country.create(country).then(result => {
        res.status(201).json({
            message: 'Country created successfully',
            league: result
        });
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

module.exports = {
    save: save,
};