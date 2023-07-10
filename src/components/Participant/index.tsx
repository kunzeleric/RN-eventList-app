import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ListaData } from '../../screens/Home'

interface ParticipantProps {
    item: ListaData,
    onRemove: (itemId: string) => void
}

export function Participant({onRemove, item}: ParticipantProps) {

    const handleRemove = () => {
        onRemove(item.id)
    }

    return (
        <View style={styles.listaWrapper}>
            <Text style={styles.listaText}>{item.nomeParticipante}</Text>
            <TouchableOpacity style={styles.button} onPress={handleRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}