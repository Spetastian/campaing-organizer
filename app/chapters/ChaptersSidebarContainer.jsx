import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    createChapterRequest, 
    selectChapterRequest,
    fetchChapterListRequest
} from '../actions/creators'
import ChapterList from './components/ChapterList'

class ChaptersSidebarContainer extends Component {

    componentDidMount(){
        this.props.loadChapterList()
    }

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
        loadChapterList: () =>
            dispatch(fetchChapterListRequest()),
        createNewChapter: (title) =>
            dispatch(createChapterRequest(title))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChaptersSidebarContainer)