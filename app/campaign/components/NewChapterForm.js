import React, { Component } from 'react'

class NewChapterForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            chapterName: '',
            showForm: false
        }
    }

    handleOnNewChapterClick = (evt) => {
        evt.preventDefault()
        this.setState({ showForm: true })
    }

    handleOnChange = (evt) => {
        const { name, value } = evt.target
        this.setState({[name]: value})
    }

    handleOnSubmit = (evt) => {
        evt.preventDefault()
        this.props.onNewChapterCreated(this.state.chapterName)
        this.setState({ showForm: false })
    }

    renderForm() {
        if (this.state.showForm){
            return (
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        onChange={this.handleOnChange}
                        value={this.state.chapterName}
                        name="chapterName"
                        type="text"
                    />
                    <button>Create</button>
                </form>
            )
        }
        else {
            return null
        }
    }


    render() {
        return (
            <div>
                <a onClick={this.handleOnNewChapterClick} href="#">
                    New Chapter
                </a>
                {this.renderForm()}
            </div>
        )
    }
}

export default NewChapterForm
