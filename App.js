import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text, View } from 'react-native';
import './Constantes/accueil.css'
import Produit from './Components/AccueilComponents/Produit';
import BateauHome from './Components/BateauComponents/BateauHome';
import BateauDesc from './Components/BateauComponents/BateauDesc';

export default function App() {
  return (
    <View>
      <BateauDesc/>
    </View>
  );
}


