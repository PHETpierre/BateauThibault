import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import './Constantes/accueil.css'
import Produit from './Components/AccueilComponents/Produit';
import BateauHome from './Components/BateauComponents/BateauHome';
import BateauDesc from './Components/BateauComponents/BateauDesc';
import RestaurantHome from './Components/RestaurantComponents/RestaurantHome';
import RestaurantDesc from './Components/RestaurantComponents/RestaurantDesc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "BateauHome" component = {BateauHome}/>
        <Stack.Screen name = "BateauDesc" component = {BateauDesc}/>
        <Stack.Screen name = "RestaurantHome" component = {RestaurantHome}/>
        <Stack.Screen name = "RestaurantDesc" component = {RestaurantDesc}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


