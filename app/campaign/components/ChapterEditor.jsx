import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'

class ChapterEditor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    componentWillReceiveProps(nextProps){
        const { title, content } = nextProps
        this.setState({ title, content })
    }

    handleTitleChange = (evt) => {
        this.setState({ title: evt.target.value })
        this.props.onTitleChange(this.props.id, evt.target.value)
    }

    handleTextChange = (value) => {
        this.setState({ content: value })
    }

    render = () =>(
        <div>
            <input
                name="title"
                type="text"
                onChange={this.handleTitleChange}
                value={this.state.title}
            />
            <ReactQuill
                theme="snow"
                value={this.state.content}
                onChange={this.handleTextChange}
            />
        </div>
    )
}

export default ChapterEditor