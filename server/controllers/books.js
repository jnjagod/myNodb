let id = 1
let books = [
    {
        id: id++,
        title: 'Sabriel',
        author: 'Garth Nix',
        currentPage: 1,
        totalPages: 491
    },
    {
        id: id++,
        title: 'Lirael',
        author: 'Garth Nix',
        currentPage: 1,
        totalPages: 720
    }
]

module.exports = {
    read:(req, res) => res.send(books),
    create: (req, res) => {
        let newBook = req.body
        newBook.id = id++
        books.push(newBook)
        res.send(books)
    },
    update: (req, res) => {
        let {id} = req.params
        let updatedBook = req.body
        updatedBook.id = id
        let index = books.findIndex(book => +book.id === +id)
        books.splice(index, 1, updatedBook)
        res.send(books)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = books.findIndex(book => +book.id === +id)
        books.splice(index, 1)
        res.send(books)
    }
}