import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeChapterNameRequest, fetchChapterRequest } from '../actions/creators'
import ChapterEditor from './components/ChapterEditor'

class CampaignPageContainer extends Component {

    componentDidUpdate(){
        if(!this.props.chapter){
            const { params: { chapterId } } = this.props.match
            this.props.loadChapter(chapterId)
        }
    }

    render () { 
        return this.props.chapter ? <ChapterEditor/> :
            (<p>Please select or create a chapter</p>)
    }
}

const mapStateToProps = (state) => {
    return { chapter: state.campaign.selectedChapter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadChapter: (id) => 
            dispatch(fetchChapterRequest(id)),
        onTitleChange: (id, newTitle) =>
            dispatch(changeChapterNameRequest(id, newTitle))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignPageContainer)