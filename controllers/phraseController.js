const {Phrase} = require('../models')

const apiPhrase = {
    createPhrase: async(req,res) =>{
        const {author, txt} = req.body
        const newPhrase = await Phrase.create({author,txt})
        res.json({id: newPhrase.id, author, txt})
    },
    listPhrases: async(req,res) =>{
        const list = await Phrase.findAll()
        res.json({list})
    },
    getPhrase: async(req,res) =>{
        const {id} = req.params
        const phrase = await Phrase.findByPk(id)
        if(phrase){
            res.json({phrase})
        }else{
            //caso contrário, mandamos um erro
            res.json({error:"Frase não existe"})
        }
    },
    updatePhrase : async(req,res) =>{
        /*a primeira coisa que precisamos para atualizar uma frase
        é pegar a frase pelo id que esta em params, em seguida 
        pegamos o txt e o author que estão no body */
        const {id} = req.params
        const {author,txt} = req.body
        //se a frase exisgir atualizamos ela
        const phrase = await Phrase.findByPk(id)
        if(phrase){
            /*mandamos a informação de autor
            e texto para ser atualizado*/
            phrase.author = author
            phrase.txt = txt
            /*e vamaos usar o .save() para salvar
            as inforamções da frase */
            await phrase.save()
            // depois mandamos um json com as informações atualizadas
            res.json({phrase})
        }else{
            //se a frase não existir
            res.json({error:'Frase não existe'})
        }
    }
}
module.exports = apiPhrase

