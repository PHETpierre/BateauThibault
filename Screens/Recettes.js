import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import RecettesJSON from '../Constantes/Recettes.json';
import { globalStyle } from '../styles';

var recettesList = RecettesJSON;

export default class Recettes extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={globalStyle.container}>
        <ImageBackground
        source={require('../App_Resources/iOS/background.png')}
        style={globalStyle.backgroundImage}
        resizeMode="cover">
          <View style={globalStyle.w50percent}>
            <Text>Vos recettes</Text>
            <Text>
            <p><strong>Toutes les recettes du bateau de Thibault</strong></p>
            <p>06.55.66.77.88</p>
            <p>addr@hotmail.com</p>
            <p>www.facebookThibault.com</p>
            </Text>
          </View>
          <View style={globalStyle.w50percent, styles.container2} >
            {recettesList.map((value, index)=>{
              return(
                <View style={[globalStyle.w50percent, styles.containerButton]}>
                  <Button
                  title={value.name}
                  key={index}
                  onPress = {()=>{
                    this.props.navigation.navigate('Details de la recette', {recette:value});
                  }}>{value.name}</Button>
                </View>
            )
            })}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    height: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'start',
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  containerButton: {
    padding: 10,
  },
  button: {
    height: '20%',
  },
  buttonHello: {
    width: 500,
    backgroundColor: 'red',
  },
});
