import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'

interface DieProps {
    title: string,
    setResult: (arg: string) => void,
    rollDice: (sides: number) => void,
    sides: number
}

export default function Die (props: DieProps) {
    return(
        <View>
            <Button title={props.title} onPress={() => props.setResult(`Rolled d20: ${props.rollDice(props.sides)}`)} />
        </View>
    )
}