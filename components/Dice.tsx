import { StyleSheet, Text, View, Button } from 'react-native'
import { useState, useEffect } from 'react'
import Die from './Die'

export default function Dice () {

    const [result, setResult] = useState(0)
    const [rolls, setRolls] = useState('')

    // calculate a value
    const rollDice = (sides: number) => {
        return String(Math.floor(Math.random() * sides) + 1)
    }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{fontSize: 30, backgroundColor: 'green', color: 'white', padding: 10}}>{result}</Text>
            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Die rollDice={rollDice} setRolls={setRolls} title='Roll a d100' setResult={setResult} sides={100}/>
                <Die rollDice={rollDice} setRolls={setRolls} title='Roll a d20' setResult={setResult} sides={20}/>
                <Die rollDice={rollDice} setRolls={setRolls} title='Roll a d10' setResult={setResult} sides={10}/>
                <Die rollDice={rollDice} setRolls={setRolls} title='Roll a d4' setResult={setResult} sides={4}/>
            </View>
        </View>
    )
}