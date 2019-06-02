import React, {Component} from 'react'
import axios from 'axios'
import Book from './Book'
import CreateBook from './CreateBook'

export default class Books extends Component {
    constructor(){
        super()

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get('api/books').then(res => {
            this.setState({
                books: res.data
            })
        }).catch (err => console.log(err))
    }

    addBook = newBook => {
        axios.post('/api/books', newBook).then(res => {
            this.setState({
                books: res.data
            })
        }).catch(err => console.log(err))
    }

    updateBook = book => {
        axios.put(`/api/books/${book.id}`, book)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err))
    }

    deleteBook = id => {
        axios.delete(`/api/books/${id}`)
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <section>
                <CreateBook addBook={this.addBook} />
                </section>
                <div style={{display: 'flex', flexWrap: 'wrap'}} >
                {this.state.books.map(book => {
                    return(
                        <Book
                        key={book.id}
                        book={book}
                        updateBook={this.updateBook}
                        deleteBook={() => this.deleteBook(book.id)} />
                        )
                    })}
                </div>
            </div>
        )
        }
}