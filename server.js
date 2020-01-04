const express = require('express')
const app = express()

app.use(express.json())


app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Bienvenido'
    })

})

app.get('/push', (req, res) => {
    res.json({
        ok: true,
        msg: 'Bienvenido a psuh 22'
    })
})

app.post('/translatetext/:language/:order', (req, res) => {

    let body = req.body
    let params = req.params

    console.log(params)

    let text = body.text
    let language = params.language
    let order = (params.order != 'false')?true:false

    console.log(typeof order)
    console.log(text,language,order)

    translateText(text, language, order)
    .then(resp => {
        res.json({
            ok: true,
            resp
        })
    })
    .catch(err => {
        res.json({
            ok: false,
            err
        })
    })

})


app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000')
})