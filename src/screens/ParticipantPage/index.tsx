import React from 'react';
import { styles } from './styles';
import { FlatList, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { ListaData } from '../Home';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ParticipantPage = ({ route }) => {

  const { lista, setLista } = route.params;

  const handleRemoveParticipant = (itemId: string) => {
    setLista((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };


  const renderItem = ({ item }: { item: ListaData }) => {
    return (
      <Participant item={item} handleRemoveParticipant={handleRemoveParticipant} />
    );
  };

  return (
    <SafeAreaView style={styles.pageList}>
      <View>
        <FlatList
          data={lista}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  )
}
