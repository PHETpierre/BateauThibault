import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
        <Button title="Homard"
          onPress = {()=>{
            this.props.navigation.navigate('RecetteDetails');
          }}>Homard</Button>
        <Button title="St Jacque">St Jacque</Button>
        <Button title="Bar">Bar</Button>
        <Button title="Tourteau">Tourteau</Button>
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
