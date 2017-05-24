import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeChapterNameRequest } from '../../actions/creators'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'

class CampaignPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    componentWillReceiveProps(nextProps){
        const { chapter } = nextProps
        this.setState({
            title: chapter && chapter.title || '',
            content: chapter && chapter.content || '',
        })
    }

    handleTitleChange = (evt) => {
        this.setState({ title: evt.target.value })
        this.props.onTitleChange(this.props.chapter.id, evt.target.value)
    }

    handleTextChange = (value) => {
        this.setState({ text: value })
    }

    render () {
        return this.props.chapter ?
            (<div>
                <input
                    name="title"
                    type="text"
                    onChange={this.handleTitleChange}
                    value={this.state.title}
                />
                <ReactQuill
                    theme="snow"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
            </div>)
            :
            (<p>Please select or create a chapter</p>)

    }
}

const mapStateToProps = (state) => {
    return { chapter: state.campaign.selectedChapter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (id, newTitle) =>
            dispatch(changeChapterNameRequest(id, newTitle))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignPage)