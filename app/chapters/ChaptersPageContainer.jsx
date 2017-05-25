import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    changeChapterNameRequest, 
    fetchChapterRequest,
    fetchChapterListRequest
 } from '../actions/creators'
import ChapterList from './components/ChapterList'
import ChapterEditor from './components/ChapterEditor'

class ChaptersPageContainer extends Component {
    
    componentDidUpdate(){
        const { params: { chapterId } } = this.props.match
        if(chapterId){
            this.props.loadChapter(chapterId)
        }
        else{
            this.props.loadChapterList()
        }
    }

    render () {
        if(this.props.chapter){
            return (
                <ChapterEditor 
                    title={this.props.chapter.title} 
                    content={this.props.chapter.content} 
                />
            )
        }
        else{
            return <ChapterList chapters={this.props.chapters} onNewChapterCreated={this.handleOnChapterCreated} /> 
        }

    }
}

const mapStateToProps = (state) => {
    return { 
        chapter: state.campaign.selectedChapter,
        chapters: state.campaign.chapters  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadChapterList: () =>
            dispatch(fetchChapterListRequest()),
        loadChapter: (id) => 
            dispatch(fetchChapterRequest(id)),
        onTitleChange: (id, newTitle) =>
            dispatch(changeChapterNameRequest(id, newTitle))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChaptersPageContainer)