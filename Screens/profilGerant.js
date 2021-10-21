import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
import { Title } from 'react-native-paper';
import { globalStyle } from '../styles';

export default class profilGerant extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <ImageBackground source={require('../App_Resources/iOS/background.png')} style={styles.backgroundImage} resizeMode="cover" >
        <Text style={styles.title}>Le bateau de Thibault</Text>
        <Image source={require('../App_Resources/iOS/TIG@3x.png')}
        style={styles.photo}/>
        <Text style={styles.subtitle}>{"\t\t06.63.99.99.78\n\tlebateaudethibault@gmail.com\nwww.facebook.com/lebateaudethibault"}</Text>
        <Text style={styles.description}>{"\n\n\n\tQu'il est chaud le soleil\nQuand nous sommes en vacances\n Y a d'la joie, des hirondelles\n\tC'est le sud de la France\n\t Papa bricole au garage\nMaman lit dans la chaise longue\n\t  Dans ce joli paysage\n Moi, je me balade en tongs\n\n\t   Que de bonheur!\n\t   Que de bonheur!"}</Text>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  photo:{
    width: '70%',
    height: '40%',
    borderColor:'50%', 
    marginTop: '5%',
    marginLeft: '15%'
  },
  backgroundImage: {
    flex: 1
  },
  title:{
    marginLeft: '10%',
    fontSize: '200%',
    marginTop: '15%',
    color:'white',
    fontFamily: "Didot"
  },
  subtitle:{
    marginTop: '0%',
    marginLeft: '15%',
    fontSize:'100%',
    opacity: 0.4
  },
  description:{
    marginLeft: '25%',
    fontSize: '75%'
  }
})
