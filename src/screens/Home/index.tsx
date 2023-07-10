import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export interface ListaData {
    id: string;
    nomeParticipante: string;
}

interface ParamProps {
    lista: ListaData[],
    setLista: React.Dispatch<React.SetStateAction<ListaData[]>>;
}

export const Home = () => {
    const [lista, setLista] = useState<ListaData[]>([]);
    const [participante, setParticipante] = useState('');

    const navigation = useNavigation();

    const handleParticipantAdd = () => {
        setLista((prevItems) => [
            ...prevItems,
            { id: Date.now().toString(), nomeParticipante: participante }
        ]);
        setParticipante('');
    };

    const handleNavigate = () => {
        const params: ParamProps = {
            lista: lista,
            setLista: setLista
        };
        navigation.navigate('ParticipantPage', params);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sábado, 8 de Julho de 2023.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    value={participante}
                    onChangeText={(newText) => setParticipante(newText)}
                />

                <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Navigate" onPress={handleNavigate} color="#31CF67" />
            </View>
            <StatusBar style="light" />
        </View>
    );
};
