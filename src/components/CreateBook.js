import React, {Component} from 'react'

export default class CreateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author: '',
            currentPage: 0,
            totalPages: 0
        }
    }

    handleChange = e => {
        let { value, name } = e.target
    
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let newBook = this.state
        this.props.addBook(newBook)
    }

    render() {
        return (
            <div style={{marginLeft: '25px'}} >
                <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={this.handleChange}
                value={this.state.title} />
                <input
                style={{marginLeft: '25px'}}
                type="text"
                name="author"
                placeholder="Author"
                onChange={this.handleChange}
                value={this.state.author} />
                <input
                style={{marginLeft: '25px'}}
                type="number"
                name="currentPage"
                placeholder="Current Page"
                onChange={this.handleChange}
                value={this.state.currentPage} />
                <input
                style={{marginLeft: '25px'}}
                type="number"
                name="totalPages"
                placeholder="Total Pages"
                onChange={this.handleChange}
                value={this.state.totalPages} />
                <button style={{marginLeft: '25px'}} onClick={this.handleClick}>Add Book</button>
            </div>
        )
    }
}