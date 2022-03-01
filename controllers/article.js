const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const getAllArtticles = (req, res) => {
    const articles = Article.findAll()
    res.json(articles)
}


module.exports = {
    getAllArtticles
};