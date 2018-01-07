const db = require('../db.js');
const Sequelize = require('sequelize');

const posts = db.define('posts', {
  postID : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: Sequelize.STRING,
  text: Sequelize.TEXT,
})

module.exports = posts;