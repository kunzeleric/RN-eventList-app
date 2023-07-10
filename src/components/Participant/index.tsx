import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Participant({handleRemoveParticipant, item}) {
    return (
        <View style={styles.listaWrapper}>
            <Text style={styles.listaText}>{item.nomeParticipante}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleRemoveParticipant(item.id)}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}