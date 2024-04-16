const { Op } = require('sequelize');

const model = require('../models');

function save(req, res) {
    const league = {
        name: req.body.name,
        countryId: req.body.countryId,
    };
    console.log(league);
    model.League.create(league).then(result => {
        res.status(201).json({
            message: 'League created successfully',
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