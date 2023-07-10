import React from 'react';
import { styles } from './styles';
import { FlatList, View, Button, Text } from 'react-native';
import { Participant } from '../../components/Participant';
import { ListaData } from '../Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export const ParticipantPage = ({ route }) => {
  const navigation = useNavigation();
  const { lista, setLista } = route.params;


  const handleRemoveParticipant = (itemId: string) => {

    setLista((prevItems: ListaData[]) => prevItems.filter(item => item.id !== itemId))
  };

  const renderItem = ({ item }: { item: ListaData }) => {
    return (
      <Participant item={item} onRemove={handleRemoveParticipant} />
    );
  };

  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.pageList}>
      <View>
        <FlatList
          data={lista}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListEmptyComponent={() =>
            <Text style={{ color: '#fff', padding: 20, fontSize: 20 }}>Ninguem chegou ao evento ainda!</Text>
          }
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Home" onPress={handleNavigate} color="#31CF67" />
      </View>
    </SafeAreaView>
  )
}
