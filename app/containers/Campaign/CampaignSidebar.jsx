import React, { Component } from 'react'
import NewChapterForm from '../../components/NewChapterForm'
import connectProps from '../../utils/redux-connect-helper'

class CampaignPage extends Component {

    handleOnChapterCreated = (chapterName) => {
        console.log(chapterName)
    }

    render () {
        return (
            <ul>
                <li>
                    <NewChapterForm onNewChapterCreated={this.handleOnChapterCreated} />
                </li>
            </ul>
        )
    }
}

export default CampaignPage