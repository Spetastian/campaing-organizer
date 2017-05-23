import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'
import connectProps from '../../utils/redux-connect-helper'

class CampaignPage extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'yeah motheruckes'};
    }

    handleChange = (value) => {
        this.setState({ text: value })
    }

    render () {
        return (
            <div>
                <ReactQuill
                    theme="snow"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { chapter: state.campaign.selectedChapter }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignPage)