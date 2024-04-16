const { Op } = require('sequelize');

const model = require('../models');

function save(req, res) {
    const team = {
        name: req.body.name,
        leagueId: req.body.leagueId,
        countryId: req.body.countryId,
    };
    console.log(team);
    model.Team.create(team).then(result => {
        res.status(201).json({
            message: 'Team created successfully',
            team: result
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