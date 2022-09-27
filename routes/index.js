var express = require('express');
var router = express.Router();

const apiTeste = require('../controllers/apiController');
const apiPhrase = require('../controllers/phraseController');

router.get('/ping',apiTeste.ping)
router.get('/random',apiTeste.random)
router.get('/nome/:nome',apiTeste.nome)

router.post('/frases',apiPhrase.createPhrase)
router.get('/frases',apiPhrase.listPhrases)
router.get('/frase/:id',apiPhrase.getPhrase)

//criando a rota para atualizar informações de frase
//usamos o PUT para atualizar algo
router.put('/frase/:id',apiPhrase.updatePhrase)


module.exports = router;
