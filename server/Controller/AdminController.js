const express = require('express')

const getCredentials = (req, res) => {
    const Credentials = { "username": "Rohit", "password": "Kumawat" }
    res.status(200).json(Credentials)
}

module.exports = { getCredentials }