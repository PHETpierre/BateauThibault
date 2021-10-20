import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './Constantes/accueil.css'
import Produit from './Components/AccueilComponents/Produit';
import Recettes from "./Screens/Recettes";
import RecetteDetails from "./Screens/RecetteDetails";
import profilGerant from "./Screens/profilGerant";
import AccueilScreen from "./Screens/AccueilScreen";
const Stack = createStackNavigator();

export default function App() {

  return (
    // <View className="accueil">
    //   <Produit/>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Acceuil"
          component = {AccueilScreen}
        />
        <Stack.Screen
          name = "Recettes"
          component = {Recettes}
        />
        <Stack.Screen
          name = "Profil du gerant"
          component = {profilGerant}
        />
        <Stack.Screen
          name = "Details de la recette"
          component = {RecetteDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
