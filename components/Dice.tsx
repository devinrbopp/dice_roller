import { StyleSheet, Text, View, Button } from 'react-native'
import { useState, useEffect } from 'react'
import Rolls from '../types/Rolls'
import Die from './Die'

export default function Dice () {

    const [result, setResult] = useState< number | null >(null)
    const [rolls, setRolls] = useState< Rolls >({
        'd4': 0,
        'd6': 0,
        'd8': 0,
        'd10': 0,
        'd12': 0,
        'd20': 0,
        'd100': 0
    })

    // calculate a value
    const rollDice = (sides: number): number => {
        return Math.floor(Math.random() * sides) + 1
    }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{fontSize: 30, backgroundColor: 'green', color: 'white', padding: 10}}>{result}</Text>
            <Text style={{fontSize: 30, backgroundColor: 'green', color: 'white', padding: 10}}>d4 count: {rolls['d4']}</Text>
            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Die rollDice={rollDice} rolls={rolls} setRolls={setRolls} title='Roll a d100' setResult={setResult} sides={100}/>
                <Die rollDice={rollDice} rolls={rolls} setRolls={setRolls} title='Roll a d20' setResult={setResult} sides={20}/>
                <Die rollDice={rollDice} rolls={rolls} setRolls={setRolls} title='Roll a d10' setResult={setResult} sides={10}/>
                <Die rollDice={rollDice} rolls={rolls} setRolls={setRolls} title='Roll a d4' setResult={setResult} sides={4}/>
            </View>
        </View>
    )
}