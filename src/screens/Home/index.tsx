import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { Participant } from '../../components/Participant';

export interface ListaData {
    id: string;
    nomeParticipante: string;
}

export const Home = () => {
    const [lista, setLista] = useState<ListaData[]>([]);
    const [participante, setParticipante] = useState('');

    const handleParticipantAdd = () => {
        setLista((prevItems) => [
            ...prevItems,
            { id: Date.now().toString(), nomeParticipante: participante }
        ]);
        setParticipante('');
    };

    const handleRemoveParticipant = (itemId: string) => {
        setLista((prevItems) => prevItems.filter(item => item.id !== itemId))
      };

    const renderItem = ({ item }: { item: ListaData }) => {
        return (
          <Participant item={item} onRemove={handleRemoveParticipant} />
        );
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

            <FlatList
                data={lista}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={() =>
                    <Text style={{ color: '#fff', padding: 20, fontSize: 20 }}>Ninguem chegou ao evento ainda!</Text>
                }
            />

            <StatusBar style="light" />
        </View>
    );
};
