
const {paginaIndex} = require('../controllers/index.controller');
const { status, append } = require('express/lib/response');
const res = require('express/lib/response');
const express = require('express')
const router = express.Router();


router.get('/', paginaIndex)
module.exports = {routes: router}

router.get('/faq', (req,res)=>{
    res.render('faq')
});

router.get('/login', (req,res)=>{
    res.render('login')
});


router.get('/register', (req,res)=>{
    res.render('register')
});

