import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
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
        const exist = lista.some(participant => participant.nomeParticipante.toLowerCase() === participante.toLowerCase())

        if (exist) {
            return Alert.alert('Participante existe!', 'Já existe um participante na lista com este nome :(')
        } else {
            setLista((prevItems) => [
                ...prevItems,
                { id: Date.now().toString(), nomeParticipante: participante }
            ]);
        }
        setParticipante('');
    };

    // personalização do Alert para criar botões e condições de acordo com possibilidade escolhida
    const handleRemoveParticipant = (itemEscolhido: ListaData) => {
        Alert.alert('Remover Participante', 'Deseja remover este participante?', [
            {
                text: 'Sim',
                onPress: () => {
                    setLista((prevItems) => prevItems.filter(item => item.id !== itemEscolhido.id))
                }
            },
            {
                text: 'Não',
                style: 'cancel',
                onPress: () => Alert.alert('Não deletado!')
            }
        ])
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
                    onChangeText={setParticipante}
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
                    <Text style={{ color: '#fff', padding: 20, fontSize: 16, textAlign: 'center' }}>
                        Ninguem está cadastrado no evento ainda! Aproveite para cadastrar agora :)
                    </Text>
                }
            />

            <StatusBar style="light" />
        </View>
    );
};
