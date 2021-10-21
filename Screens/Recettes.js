import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
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
          <Text>Vos recettes</Text>
          <Text>
          <p><strong>Toutes les recettes du bateau de Thibault</strong></p>
          <p>06.55.66.77.88</p>
          <p>addr@hotmail.com</p>
          <p>www.facebookThibault.com</p>
          </Text>
          <View style={globalStyle.w50percent, styles.container2} >
            {recettesList.map((value, index)=>{
              return(
                <View style={[globalStyle.w50percent, styles.containerButton]}>
                  <TouchableOpacity
                  title={value.name}
                  style={[styles.button]}
                  key={index}
                  onPress = {()=>{
                    this.props.navigation.navigate('Details de la recette', {recette:value}); }}>
                    <View style={styles.container4}>
                      <Image style={styles.image} source={require('../App_Resources/iOS/poisson.png')} />
                      <Text style={{alignSelf:'center', paddingLeft:5}}>{value.name}</Text>
                    </View>
                  </TouchableOpacity>
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
  container4: {
    flex: 1,
    flexDirection: 'row',
  },
  containerButton: {
    padding: 5,
    justifyContent: 'left',
  },
  button: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'start',
  },
  buttonHello: {
    width: 500,
    backgroundColor: 'red',
  },
  image:{
    width:50,
    height: 50,
    borderColor:'50%',
  },
});
