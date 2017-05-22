import React, { Component } from 'react'
import appStyle from '../app.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'
import connectProps from '../utils/redux-connect-helper'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'yeah motheruckes'};
    }

    handleChange = (value) => {
        this.setState({ text: value })
    }

    render () {
        return (
            <ReactQuill
                theme="snow"
                value={this.state.text}
                onChange={this.handleChange}
            />
        )
    }
}

export default Home