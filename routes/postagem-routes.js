const express = require('express');
const router = express.Router();
const PostagemController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem');

const postagensController = new PostagemController(PostagemModel);

router.get('/', async(req, res)=>{
    const postagens = await postagensController.consultarTodos();
    res.send(postagens)
});

router.post('/', async(req, res)=>{
    const novaPostagem = req.body;
    const retorno = await postagensController.adicionar(novaPostagem);
    res.send(retorno)
});

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const postagemDT0 = req.body;
    await postagensController.alterarPorId(id, postagemDT0)
    res.send('Alterado com sucesso')
});
//get por id
router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    const postagem = await postagensController.consultarPorId(id);
    if(postagem){
        res.send(postagem)
    }else{
        res.sendStatus(404);
    }
});

//delete por id
router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    await postagensController.deletePorId(id);
    res.send('Deletado com sucesso')
});

module.exports = router;