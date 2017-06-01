import React from 'react'
import TextField from 'material-ui/TextField'
import styles from './attribute.scss'

const inputStyle = {
    textAlign: 'center'
}

const hintStyle = {
    left: '25%'
}


const Attribute = ({
    name,
    withBonus, 
    valuePrefix, 
    valueSuffix, 
    bonusPrefix, 
    bonusSuffix, 
    minValue = 0,
    maxValue = 99,
    minBonus = 0, 
    maxBonus = 99 }) => (
    <div className={styles.container}>
        <div className={styles.nameContainer}>
            <span>{name}</span>
        </div>
        <div>
            <span className={styles.valuePrefix}>{valuePrefix}</span>
            <TextField hintStyle={hintStyle} inputStyle={inputStyle} name="value" className={styles.attrInput} type="number" hintText="0"/>
            <span className={styles.valueSuffix}>{valueSuffix}</span>
            <span className={styles.bonusPrefix}>{bonusPrefix}</span>
            <TextField hintStyle={hintStyle} inputStyle={inputStyle} name="bonus" className={styles.attrInput} type="number" hintText="0"/>
            <span className={styles.bonusSuffix}>{valuePrefix}</span>
        </div>
    </div>
)

export default Attribute