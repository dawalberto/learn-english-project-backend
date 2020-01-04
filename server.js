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

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000')
})