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

import Attribute from './Attribute'
import Section from './Section'

const Eon4BaseAttributeInput = 
    ({ name }) => <Attribute withBonus name={name} valueSuffix="T6" bonusPrefix="+"maxBonus = {3} />

const Eon4CharacterSheet = () => (
    <div>
        <Section title="Grundinfo">
            <div>
                <TextField hintText="Namn"/>
                <TextField hintText="Folkslag"/>
                <TextField hintText="Kön"/>
            </div>
            <div>
                <TextField hintText="Arketyp"/>
                <TextField hintText="Miljo"/>
                <TextField hintText="Bakgrund"/>
            </div>
        </Section>
        <Section title="Grundegenskaper">
            <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Styrka"/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Talighet"/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Rorlighet"/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Uppfattning"/>
                    </TableRowColumn>
                </TableRow>
                </TableBody>
            </Table>
            
            <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Vilja"/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Psyke"/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Visdom"/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Eon4BaseAttributeInput name="Utstralning"/>
                    </TableRowColumn>
                </TableRow>
                </TableBody>
            </Table>
        </Section>
        <Section title="Harledda Varden">
            <div>
                <TextField hintText="Namn"/>
                <TextField hintText="Folkslag"/>
                <TextField hintText="Kön"/>
            </div>
            <div>
                <TextField hintText="Arketyp"/>
                <TextField hintText="Miljo"/>
                <TextField hintText="Bakgrund"/>
            </div>
        </Section>
    </div>
)

export default Eon4CharacterSheet