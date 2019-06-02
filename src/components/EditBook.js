import React, {Component} from 'react'

export default class EditBook extends Component {
    constructor(props) {
        super(props)

        let { currentPage } = props.book

        this.state = {
            currentPage
        }
    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let updatedBook = {...this.props.book, ...this.state}
        this.props.updateBook(updatedBook)
    }

    render() {
        return(
            <div>
                <input
                type="number"
                name="currentPage"
                value={this.state.currentPage}
                placeholder="current page"
                onChange={this.handleChange} />
                <button onClick={this.handleClick}>Update</button>
            </div>
        )
    }
}