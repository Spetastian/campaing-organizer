import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import styles from './section.scss'

const Section = ({ title, children }) => (
  <Card style={{ marginTop: '6px' }}>
    <CardHeader title={title} />
    <CardText children={children} style={{display:'flex'}}/>
  </Card>
)

export default Section