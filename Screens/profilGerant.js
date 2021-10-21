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
      <View style={styles.container}>
        <ImageBackground
        source={require('../App_Resources/iOS/background.png')}
        style={globalStyle.backgroundImage}
        resizeMode="cover">
          <Title>Le bateau de Thibault</Title>
          <Image style={globalStyle.image}
          source={require('../App_Resources/iOS/ancre.png')} />
          <Text>06.63.99.99.78</Text>
          <Text>www.facebook.com</Text>
          <Text>addr@gmail.com</Text>
          <Text>Texte de description</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
});
