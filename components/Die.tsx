import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    Pressable 
} from 'react-native'

interface DieProps {
    title: string,
    setResult: (arg: string) => void,
    rollDice: (sides: number) => void,
    sides: number
}

export default function Die (props: DieProps) {
    return(
        <View>
            <Pressable
                style={styles.button} 
                onPress={() => props.setResult(`Rolled d${props.sides}: ${props.rollDice(props.sides)}`)} 
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
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})