import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text, View } from 'react-native';
import './Constantes/accueil.css'
import Produit from './Components/AccueilComponents/Produit';
import BateauHome from './Components/BateauComponents/BateauHome';

export default function App() {
  return (
    <View>
      <BateauHome/>
    </View>
  );
}


