const express = require('express')
const router = express.Router()

// Endpoints


// Ejemplo de Route Params y Query String
router.get('/:clothe/estacion/:season', (req, res) => {

    const clotheValue = req.params.clothe
    const seasonValue = req.params.season
    console.log(`---- A la BBDD enviarías como prenda ${clotheValue} y como estación ${seasonValue}  ----`)

    const materialValue = req.query.material
    const colorValue = req.query.color
    const sizeValue = req.query.talla
    console.log(`---- Además, obtendrías los registros para material ${materialValue}, color ${colorValue} y talla ${sizeValue}  ----`)

    res.send('<h1>Mira a la consola</h1>')
})


// Formulario de búsqueda GET
router.get('/buscar', (req, res) => res.render('search-form'))

// Resultados de la búsqueda
router.get('/resultados', (req, res) => {

    const clotheValue = req.query.clothe
    const colorValue = req.query.color
    const sizeValue = req.query.talla

    res.send(`<h3>Mostrando los artículos para ${clotheValue} de color ${colorValue} y talla ${sizeValue}</h3>`)
})


module.exports = router
