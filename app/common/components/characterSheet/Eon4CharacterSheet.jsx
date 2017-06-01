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
import Column from './Column'

const Eon4BaseAttributeInput = 
    ({ name }) => <Attribute withBonus name={name} valueSuffix="T6" bonusPrefix="+"maxBonus = {3} />

const Eon4CharacterSheet = () => (
    <div>
        <Column>
            <Section title="Grundinfo">
                <div>
                    <TextField floatingLabelText="Namn"/>
                    <TextField floatingLabelText="Folkslag"/>
                    <TextField floatingLabelText="Kön"/>
                </div>
                <div>
                    <TextField floatingLabelText="Arketyp"/>
                    <TextField floatingLabelText="Miljo"/>
                    <TextField floatingLabelText="Bakgrund"/>
                </div>
                <div>
                    <TextField floatingLabelText="Namn"/>
                    <TextField floatingLabelText="Folkslag"/>
                    <TextField floatingLabelText="Kön"/>
                </div>
                <div>
                    <TextField floatingLabelText="Arketyp"/>
                    <TextField floatingLabelText="Miljo"/>
                    <TextField floatingLabelText="Bakgrund"/>
                </div>
            </Section>
        </Column>
        <Column>
            <Section title="Karaktarsdrag">
                <div>
                    <TextField floatingLabelText="Primart"/>
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
                </div>
                <div>
                    <TextField floatingLabelText="Sekundart"/>
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
                </div>
            </Section>
            <Section title="Fokus">
                <div>
                    <TextField floatingLabelText="Namn"/>
                    <TextField floatingLabelText="Folkslag"/>
                    <TextField floatingLabelText="Kön"/>
                </div>
                <div>
                    <TextField floatingLabelText="Arketyp"/>
                    <TextField floatingLabelText="Miljo"/>
                    <TextField floatingLabelText="Bakgrund"/>
                </div>
            </Section>
        </Column>
        <Column>
            <Section half title="Grundegenskaper">
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
            <Section half title="Harledda Varden">
                
                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>
                            <Eon4BaseAttributeInput name="Forflyttning"/>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Eon4BaseAttributeInput name="Intryck"/>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Eon4BaseAttributeInput name="Kroppsbyggnad"/>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Eon4BaseAttributeInput name="Reaktion"/>
                        </TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>

                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>
                            <Eon4BaseAttributeInput name="Sjalvkontroll"/>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Eon4BaseAttributeInput name="Vaksamhet"/>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Eon4BaseAttributeInput name="Grundskada"/>
                        </TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>
            </Section>
        </Column>
    </div>
)

export default Eon4CharacterSheet