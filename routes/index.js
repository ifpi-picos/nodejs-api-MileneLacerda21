
const express = require('express');
const postagemRoutes = require('./postagem-routes');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('App ta ON k7!!')
});

router.use((req, res, next)=>{
    console.log('Time: ', Date.now());
    next();
})
router.use('/postagens', postagemRoutes)

module.exports = router;
