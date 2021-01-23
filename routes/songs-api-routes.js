const db = require('../models');

module.exports = (app) => {
    //not sure if we need this to be /api/songs or technically /api/playlist???
    app.post('/api/songs', (req, res) => {
        db.Songs.create(req.body).then((dbsongs) => res.json(dbsongs));
    });

    app.get('/api/songs/:id', (req, res) => {
        db.Songs.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbsongs) => res.json(dbsongs));
    });

    app.get('/api/songs/:id', (req, res) => {
        db.Songs.findAll({
            // include: []
        }).then((dbsongs) => res.json(dbsongs));
    });

    app.delete('/api/songs/:id', (req, res) => {
        db.Songs.destroy({
            where: {
            id: req.params.id,
            },
        }).then((dbsongs) => res.json(dbsongs));
    });
}
