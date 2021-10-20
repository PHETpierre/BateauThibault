import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RecettesJSON from '../Constantes/Recettes.json';

var recettesList = RecettesJSON;

export default class Recettes extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Vos recettes</Text>
        <Text>
        <p><strong>Toutes les recettes du bateau de Thibault</strong></p>
        <p>06.55.66.77.88</p>
        <p>addr@hotmail.com</p>
        <p>www.facebookThibault.com</p>
        </Text>
        {recettesList.map((value, index)=>{
          return <Button
          title={value.name}
          key={index}
          onPress = {()=>{
            this.props.navigation.navigate('RecetteDetails', {recette:value});
          }}>{value.name}</Button>
        })}
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
