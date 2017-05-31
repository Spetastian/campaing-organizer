import React from 'react'
import TextField from 'material-ui/TextField'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const CharacterItem = ({id, name}) => (
    <div>
        <div>
            <TextField hintText="Namn"/>
            <TextField hintText="Folkslag"/>
            <TextField hintText="Kön"/>
            <TextField hintText="Arketyp"/>
            <TextField hintText="Miljo"/>
            <TextField hintText="Bakgrund"/>
        </div>
        <div>
            <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>Styrka</TableRowColumn>
                    <TableRowColumn><TextField type="number" hintText="0"/></TableRowColumn>
                    <TableRowColumn>+2</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Talighet</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>+2</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Rorlighet</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>+2</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Uppfattning</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>+2</TableRowColumn>
                </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
)

export default CharacterItem