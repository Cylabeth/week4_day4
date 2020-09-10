const express = require('express')
const router = express.Router()

const Book = require('../models/book.model')



// Endpoints
router.get('/listado', (req, res) => {

    Book.find()
        .then(books => res.render('books-list', { books }))
        .catch(err => console.log('ERROR:', err))
})


// Endpoints
router.get('/detalles/:book_id', (req, res) => {

    const id = req.params.book_id

    Book.findById(id)
        .then(theFullBookDetails => res.render('book-details', theFullBookDetails))
        .catch(err => console.log("ERRORR", err))
})


module.exports = router
