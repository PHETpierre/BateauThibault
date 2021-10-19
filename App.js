import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text, View } from 'react-native';
import './Constantes/accueil.css'
import Produit from './Components/AccueilComponents/Produit';
export default function App() {
  return (
    <View className="accueil">
      <Produit/>
      <StatusBar style="auto" />
    </View>
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

