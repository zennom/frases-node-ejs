const apiTeste = {
    ping:(req,res) =>{
        res.json({pong:true})
    },
    random:(req,res) =>{
        let nRand = Math.floor(Math.random() * 10)

        res.json({number: nRand})
    },
    nome:(req,res) =>{
        let nome = req.params.nome
        res.json({nome: `Você enviou o nome ${nome}`})
    }
}

module.exports = apiTeste

