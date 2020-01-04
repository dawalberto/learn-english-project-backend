const express = require('express')
const app = express()

app.use(express.json())


app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Bienvenido'
    })

})

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000')
})