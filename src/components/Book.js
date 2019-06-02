import React, {Component} from 'react'
import EditBook from './EditBook'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        let {book} = this.props
        return (
            <div className="book" >
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                {this.state.edit ?
                <EditBook
                book={book}
                updateBook={this.props.updateBook} />
                :
                <p>Current Page: {book.currentPage} </p>
                }
                <p>Total Pages: {book.totalPages} </p>
                {this.state.edit ?
                <button onClick={this.toggleEdit}>Done</button>
                :
                <button onClick={this.toggleEdit}>Edit</button>
                }
                <button onClick={this.props.deleteBook}>Delete</button>
            </div>
        )
    }
}