import { StyleSheet, Text, View, Button } from 'react-native'
import { useState, useEffect } from 'react'

export default function Dice () {

    const [result, setResult] = useState('Roll to get started!')

    // calculate a value
    const rollDice = (sides: number) => {
        return Math.floor(Math.random() * sides) + 1
    }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 30}}>{result}</Text>
            <Button title='Roll a d20' onPress={() => {setResult(rollDice(20))}} />
        </View>
    )
}