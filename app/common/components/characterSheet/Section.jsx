import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import styles from './section.scss'

const Section = ({ title, children, half }) => (
  <Card style={{ marginTop: '6px', flex: (half ? '2' : '1')}}>
    <CardHeader title={title} />
    <CardText children={children} style={{display:'flex'}}/>
  </Card>
)

export default Section