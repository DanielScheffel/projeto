const express = require('express')

app.use(express.json())

app.use(express.static('public'))

const UserRoutes = 



app.listen('8080', () => {
    console.log('Rondando na porta 8080!');
});