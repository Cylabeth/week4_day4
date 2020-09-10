const express = require('express')
const router = express.Router()

// Endpoints


// Inicio
router.get('/', (req, res) => res.render('index'))


// Renderizo formlario
router.get('/iniciar-sesion', (req, res) => res.render('login-form'))

// Proceso formulario
router.post('/iniciar-sesion', (req, res) => {

    console.log(`---- Las peticiones de tipo POST almecenan la información en req.body ----`, req.body)
    res.send(`<h3>El nombre de usuario a buscar en la BBDD es ${req.body.username} y la contraseña ${req.body.pwd}</h3><p>Mira la consola...</p>`)
})


module.exports = router
