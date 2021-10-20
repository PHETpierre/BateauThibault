import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text, View } from 'react-native';
import './Constantes/accueil.css'
import AccueilUpdate from './Components/AccueilComponents/AccueilUpdate';
export default function App() {
  return (
    <View className="accueil">
      <AccueilUpdate/>
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

