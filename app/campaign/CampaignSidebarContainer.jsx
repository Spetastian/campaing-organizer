import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createChapterRequest, selectChapterRequest } from '../actions/creators'
import ChapterList from './components/ChapterList'

class CampaignSidebar extends Component {

    handleOnChapterCreated = (chapterName) => {
        this.props.createNewChapter(chapterName)
    }

    render () {
        return  <ChapterList chapters={this.props.chapters} onNewChapterCreated={this.handleOnChapterCreated} /> 
    }
}
const mapStateToProps = (state) => {
    return { chapters: state.campaign.chapters }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewChapter: (title) =>
            dispatch(createChapterRequest(title))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignSidebar)