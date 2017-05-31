import React from 'react'
import ListItem from '../../common/components/ListItem'
import { Link } from 'react-router-dom'

const CharacterItem = ({id, name}) => (
    <Link to={`/characters/${id}`} >
        <ListItem title={name}>
            <p>Child content</p>
        </ListItem>
    </Link>
)

export default CharacterItem