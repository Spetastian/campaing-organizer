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

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import Attribute from './Attribute'
import Section from './Section'
import Column from './Column'

import styles from './eon4CharacterSheet.scss'

const Eon4BaseAttributeInput = 
    ({ name }) => <Attribute withBonus name={name} valueSuffix="T6" bonusPrefix="+"maxBonus = {3} />
    

const Eon4CharacterSheet = () => (
    <div>
        <Column>
            <Section title="Grundegenskaper">
                <div>
                    <Eon4BaseAttributeInput name="Styrka"/>
                    <Eon4BaseAttributeInput name="Talighet"/>
                    <Eon4BaseAttributeInput name="Rorlighet"/>
                    <Eon4BaseAttributeInput name="Uppfattning"/>
                    <Eon4BaseAttributeInput name="Vilja"/>
                    <Eon4BaseAttributeInput name="Psyke"/>
                    <Eon4BaseAttributeInput name="Visdom"/>
                    <Eon4BaseAttributeInput name="Utstralning"/>
                </div>
                </Section>
            <Section title="Grundinfo">
                <div>
                    <TextField floatingLabelFixed floatingLabelText="Namn"/>
                    <TextField floatingLabelFixed floatingLabelText="Folkslag"/>
                    <TextField floatingLabelFixed floatingLabelText="Kön"/>
                    <TextField floatingLabelFixed floatingLabelText="Arketyp"/>
                    <TextField floatingLabelFixed floatingLabelText="Miljo"/>
                    <TextField floatingLabelFixed floatingLabelText="Bakgrund"/>
                </div>
            </Section>
            <Section title="Karaktarsdrag">
                <div>
                    <TextField floatingLabelFixed floatingLabelText="Primart"/>
                    <div>
                        <div><span>I</span><TextField /></div>
                        <div><span>II</span><TextField /></div>
                        <div><span>III</span><TextField /></div>
                    </div>
                    <TextField floatingLabelFixed floatingLabelText="Sekundart"/>
                    <div>
                        <div><span>I</span><TextField /></div>
                        <div><span>II</span><TextField /></div>
                        <div><span>III</span><TextField /></div>
                    </div>
                </div>
            </Section>
        </Column>
        <Column>
                <Section title="Harledda Varden">
                <div className={styles.leftToRight}>
                    <Eon4BaseAttributeInput name="Forflyttning"/>
                    <Eon4BaseAttributeInput name="Intryck"/>
                    <Eon4BaseAttributeInput name="Kroppsbyggnad"/>
                    <Eon4BaseAttributeInput name="Reaktion"/>
                    <Eon4BaseAttributeInput name="Sjalvkontroll"/>
                    <Eon4BaseAttributeInput name="Vaksamhet"/>
                    <Eon4BaseAttributeInput name="Grundskada"/>
                </div>
            </Section>
        </Column>
        <Column>
            <Section title="Stridsfardigheter">
                <div>
                    <Eon4BaseAttributeInput name="Armborst"/>
                    <Eon4BaseAttributeInput name="Bage"/>
                    <Eon4BaseAttributeInput name="Dolk"/>
                    <Eon4BaseAttributeInput name="Kastvapen"/>
                    <Eon4BaseAttributeInput name="Klubba"/>
                    <Eon4BaseAttributeInput name="Kedjevapen"/>
                    <Eon4BaseAttributeInput name="Skold"/>
                    <Eon4BaseAttributeInput name="Slagsmal"/>
                    <Eon4BaseAttributeInput name="Spjut"/>
                    <Eon4BaseAttributeInput name="Stav"/>
                    <Eon4BaseAttributeInput name="Svard"/>
                    <Eon4BaseAttributeInput name="Yxa"/>
                </div>
            </Section>
            <Section title="Rorelsefardigheter">
                <div>
                    <Subheader>Rorelsefardigheter</Subheader>
                    <Eon4BaseAttributeInput name="Dansa"/>
                    <Eon4BaseAttributeInput name="Fingerfardighet"/>
                    <Eon4BaseAttributeInput name="Gomma"/>
                    <Eon4BaseAttributeInput name="Hoppa"/>
                    <Eon4BaseAttributeInput name="Klattra"/>
                    <Eon4BaseAttributeInput name="Lasdyrkning"/>
                    <Eon4BaseAttributeInput name="Simma"/>
                    <Eon4BaseAttributeInput name="Smyga"/>
                    <Eon4BaseAttributeInput name="Undvika"/>
                </div>
            </Section>
            <Section title="Rorelsefardigheter">
                <div>
                    <Subheader>Mystiska fardigheter</Subheader>
                    <Eon4BaseAttributeInput name="Ceremoni"/>
                    <Eon4BaseAttributeInput name="Fornimma"/>
                    <Eon4BaseAttributeInput name="Forvranga"/>
                    <Eon4BaseAttributeInput name="Kanalisera"/>
                </div>
            </Section>
        </Column>


        <Column>
            <Section title="Sociala fardigheter">
                <div>
                    <Eon4BaseAttributeInput name="Argumentera"/>
                    <Eon4BaseAttributeInput name="Berattarkonst"/>
                    <Eon4BaseAttributeInput name="Charm"/>
                    <Eon4BaseAttributeInput name="Dupera"/>
                    <Eon4BaseAttributeInput name="Genomskada"/>
                    <Eon4BaseAttributeInput name="Hovliv"/>
                    <Eon4BaseAttributeInput name="Injaga fruktan"/>
                    <Eon4BaseAttributeInput name="Ledarskap"/>
                    <Eon4BaseAttributeInput name="Skumraskaffarer"/>
                    <Eon4BaseAttributeInput name="Spel & dobbel"/>
                    <Eon4BaseAttributeInput name="Sang & musik"/>
                </div>
            </Section>
            <Section title="Kunskapsfardigheter">
                <div>
                    <Eon4BaseAttributeInput name="Filosofi"/>
                    <Eon4BaseAttributeInput name="Geografi"/>
                    <Eon4BaseAttributeInput name="Gifter & droger"/>
                    <Eon4BaseAttributeInput name="Handel"/>
                    <Eon4BaseAttributeInput name="Historia"/>
                    <Eon4BaseAttributeInput name="Kalkylera"/>
                    <Eon4BaseAttributeInput name="Kirurgi"/>
                    <Eon4BaseAttributeInput name="Krigforing"/>
                    <Eon4BaseAttributeInput name="Kulturkannedom"/>
                    <Eon4BaseAttributeInput name="Lagkunskap"/>
                    <Eon4BaseAttributeInput name="Lakekonst"/>
                    <Eon4BaseAttributeInput name="Ockultism"/>
                    <Eon4BaseAttributeInput name="Teologi"/>
                    <Eon4BaseAttributeInput name="Teoretisk magi"/>
                    <Eon4BaseAttributeInput name="Undervisa"/>
                </div>
            </Section>
            <Section title="Vildmarksfardigheter">
                <div>
                    <Eon4BaseAttributeInput name="Genomsoka"/>
                    <Eon4BaseAttributeInput name="Jakt & fiske"/>
                    <Eon4BaseAttributeInput name="Kora vagn"/>
                    <Eon4BaseAttributeInput name="Marsch"/>
                    <Eon4BaseAttributeInput name="Naturlara"/>
                    <Eon4BaseAttributeInput name="Navigation"/>
                    <Eon4BaseAttributeInput name="Orientering"/>
                    <Eon4BaseAttributeInput name="Rida"/>
                    <Eon4BaseAttributeInput name="Sjomannaskap"/>
                    <Eon4BaseAttributeInput name="Speja"/>
                    <Eon4BaseAttributeInput name="Spara"/>
                    <Eon4BaseAttributeInput name="Vildmarksvana"/>
                </div>
            </Section>
        </Column>

        <Column>
            <Section title="Fardigheter">
                <div>
                    <Subheader>Vildmarksfardigheter</Subheader>
                    <Eon4BaseAttributeInput name="Genomsoka"/>
                    <Eon4BaseAttributeInput name="Jakt & fiske"/>
                    <Eon4BaseAttributeInput name="Kora vagn"/>
                    <Eon4BaseAttributeInput name="Marsch"/>
                    <Eon4BaseAttributeInput name="Naturlara"/>
                    <Eon4BaseAttributeInput name="Navigation"/>
                    <Eon4BaseAttributeInput name="Orientering"/>
                    <Eon4BaseAttributeInput name="Rida"/>
                    <Eon4BaseAttributeInput name="Sjomannaskap"/>
                    <Eon4BaseAttributeInput name="Speja"/>
                    <Eon4BaseAttributeInput name="Spara"/>
                    <Eon4BaseAttributeInput name="Vildmarksvana"/>
                    <Divider />
                    <Subheader>Ovriga fardigheter</Subheader>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Divider />
                    <Subheader>Sprakfardigheter</Subheader>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                    <Eon4BaseAttributeInput name=""/>
                </div>
            </Section>
        </Column>
    </div>
)

export default Eon4CharacterSheet