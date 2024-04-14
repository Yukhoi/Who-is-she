const { Op } = require('sequelize');

const model = require('../models');

function save(req, res) {
    const player = {
        name: req.body.name,
        surname: req.body.surname,
        countryId: req.body.countryId,
        teamId: req.body.teamId,
        age: req.body.age,
        number: req.body.number,
    };
    console.log(player);
    model.Player.create(player).then(result => {
        res.status(201).json({
            message: 'Player created successfully',
            player: result
        });
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

function findPlayerById(req, res) {
    const id = req.params.id;
    model.Player.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

function findPlayersByPartialName(req, res) {
    const partialName = req.params.partialName;
    model.Player.findAll({
        where: {
            surname: {
                [Op.like]: `%${partialName}%`
            }
        }
    }).then(result => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}


function findAllPlayers(req, res) {
    model.Player.findAll().then(result => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

module.exports = {
    save: save,
    findPlayerById: findPlayerById,
    findAllPlayers: findAllPlayers,
    findPlayersByPartialName: findPlayersByPartialName
};