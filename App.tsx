import { Home } from "./src/screens/Home";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParticipantPage } from "./src/screens/ParticipantPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={ { headerStyle: { backgroundColor: '#000'}, headerTintColor:'#fff'}}/>
        <Stack.Screen name="ParticipantPage" component={ParticipantPage} options={ { headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
