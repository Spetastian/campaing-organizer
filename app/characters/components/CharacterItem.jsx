import React from 'react'
import ListItem from '../../common/components/ListItem'

const CharacterItem = ({id, name}) => (
    <ListItem title={name}>
        <p>Child content</p>
    </ListItem>
)

export default CharacterItem