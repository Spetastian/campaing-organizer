import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createChapterRequest } from '../../actions/creators'
import NewChapterForm from '../../components/NewChapterForm'
import connectProps from '../../utils/redux-connect-helper'

class CampaignSidebar extends Component {

    handleOnChapterCreated = (chapterName) => {
        this.props.onNewChapterCreated(chapterName)
    }

    renderChapterList(){
        return this.props.chapters.map((chapter, index) => (
            <li key={index}>{chapter.title}</li>
        ))
    }

    render () {
        return (
            <ul>
                <li>
                    <NewChapterForm onNewChapterCreated={this.handleOnChapterCreated} />
                </li>
                {this.renderChapterList()}
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return { chapters: state.campaign.chapters }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewChapterCreated: (title) =>
            dispatch(createChapterRequest(title))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignSidebar)