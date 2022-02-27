import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    Pressable 
} from 'react-native'
import Rolls from '../types/Rolls'

interface DieProps {
    title: string,
    setResult: (arg: number) => void,
    rollDice: (sides: number) => number,
    sides: number,
    rolls: Rolls,
    setRolls: (arg: Rolls) => void
}

export default function Die (props: DieProps) {
    return(
        <View>
            <Pressable
                style={styles.button} 
                onPress={() => {
                    props.setResult(props.rollDice(props.sides))
                    const tempRolls: Rolls = props.rolls
                    tempRolls[('d' + props.sides)] += 1
                    props.setRolls(tempRolls)
                }} 
            >
                <Text style={styles.buttonText}>{props.title}</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 12,
        // paddingHorizontal: 32,
        width: 150,
        height: 150,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})