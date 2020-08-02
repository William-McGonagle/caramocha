/////////////
// IMPORTS //
/////////////

const express = require('express');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

////////////
// MODELS //
////////////

var User = sequelize.define('user', {
username: Sequelize.STRING,
password: Sequelize.TEXT,
description: Sequelize.TEXT,
email: Sequelize.TEXT,
birthday: Sequelize.DATE,
emailVerified: Sequelize.BOOLEAN,
});

///////////////
// ENDPOINTS //
///////////////

app.post('/signup', function () {



});

app.post('/login', function () {



});

app.get('/:id/', function () {

if (req.body.id == undefined) return res.status(400).send('Sorry, Not All Parameters Given.');

  User.findOne({
    where: {
      id: req.body.id
    }
  }).then(function (data) {

    if (data == null) return res.status(404).send('User with Given Index not Found');

    return res.json(data);

  }).catch(function (error) {

    console.log(error);
    return res.status(500).send('Internal Database Error');

  });

});

