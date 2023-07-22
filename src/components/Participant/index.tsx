import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ListaData } from '../../screens/Home'

interface ParticipantProps {
    item: ListaData,
    onRemove: (item: ListaData) => void
}

export function Participant({onRemove, item}: ParticipantProps) {

    return (
        <View style={styles.listaWrapper}>
            <Text style={styles.listaText}>{item.nomeParticipante}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onRemove(item)}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}