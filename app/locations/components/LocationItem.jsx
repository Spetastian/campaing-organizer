import React from 'react'
import ListItem from '../../common/components/ListItem'

const LocationItem = ({id, title}) => (
    <ListItem title={title}>
        <p>Child content</p>
    </ListItem>
)

export default LocationItem