const { Router } = require('express');
const router = Router();
const { unlink } =require('fs-extra');
const path = require('path');
const Book = require('../models/Books');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename
    const newBook = new Book({ title, author, isbn, imagePath });
    console.log(newBook);
    await newBook.save();
    res.json({ message: 'book save' });
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + book.imagePath));
    console.log(book);
    res.json({ message: 'book deleted' });
})

module.exports = router;