import React from 'react'
import TextField from 'material-ui/TextField'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

import { Eon4CharacterSheet } from '../../common/components/characterSheet'

import styles from './characterSheet.scss'

const Eon4BaseAttributeInput = 
    ({ name }) => <Attribute withBonus name={name} valueSuffix="T6" bonusPrefix="+"maxBonus = {3} />

const CharacterItem = ({id, name}) => (
    <Eon4CharacterSheet />
)

export default CharacterItem