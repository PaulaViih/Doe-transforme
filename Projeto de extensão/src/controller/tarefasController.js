const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

//loading model..

require("..models/tarefas");
const Tarefas = mongoose.model("tarefas");

// Open and load

router.get('/tarefas', (req, res) => {
    Tarefas.find().lean().then((tarefas) => {
        res.render("admin/tarefas/tarefas", { tarefas: tarefas });
    });
});

//Open form

router.get('/tarefas/add', (req, res) => {
    res.render("admin/tarefas/addtarefas");
});

//receive the information of botton

router.post('/tarefas/nova', (req, res) => {
    var tarefas = new Tarefas();
    tarefas.nome = req.body.nome;
    tarefas.descricao = req.body.description;
    tarefas.save().then(() => {
        res.redirect("/rota_tarefas/tarefas");
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro)
    });
});

//Open and fill out the form -- read

router.get('/editar_tarefas/:id', (req, res) => {
    Tarefas.findOne({ _id: req.params.id }).lean().then((tarefas) => {
        res.render("admin/tarefas/edittarefas", { tarefa: tarefas});
    });
});

// receive the information of botton --edit

router.post('/tarefas/editar_tarefas', (req, res) => {
    Tarefas.updateOne({ _id: req.body._id },
        {
            $set: {
                nome: req.body.nome, descricao: req.body.descricao
        }
    }).then(() => {
        res.redirect("/rota_tarefas/tarefas");
    });
});

//Delete the informations and remake the list

router.get('/deletar_tarefas/:id', (req, res) => {
    Tarefas.deleteMany({ _id: req.params.id }).then(() => {
        res.redirect("/rota_tarefas/tarefas");
    });
});

module.exports = router;