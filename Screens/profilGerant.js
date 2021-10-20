import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Title } from 'react-native-paper';
import { color } from '../styles';

export default class profilGerant extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <Title>Le bateau de Thibault</Title>
        <Text>06.63.99.99.78</Text>
        <Text>www.facebook.com</Text>
        <Text>addr@gmail.com</Text>
        <Text>Texte de description</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
