import React from 'react'
import { NavLink } from 'react-router-dom'
import NewChapterForm from './NewChapterForm'
import styles from './chapterList.scss'

const ChapterList = ({ chapters, onNewChapterCreated }) => (
    <ul className={styles.chapterList}>
        <li>
            <NewChapterForm onNewChapterCreated={onNewChapterCreated} />
        </li>
        {chapters.map(chapter => (
            <li key={chapter.id}>
                <NavLink to={`/campaign/${chapter.id}`}>
                    {chapter.title}
                </NavLink>
            </li>)
        )}
    </ul>
)

export default ChapterList