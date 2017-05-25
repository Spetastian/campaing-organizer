import React from 'react'
import { NavLink } from 'react-router-dom'
import NewChapterForm from './NewChapterForm'

const ChapterList = ({ chapters, onNewChapterCreated }) => (
    <ul>
        <li>
            <NewChapterForm onNewChapterCreated={onNewChapterCreated} />
        </li>
        {chapters.map((chapter, index) => (
            <li key={index}>
                <NavLink to={`/campaign/${chapter.id}`}>
                    {chapter.title}
                </NavLink>
            </li>)
        )}
    </ul>
)

export default ChapterList