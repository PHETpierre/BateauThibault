import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Title } from 'react-native-paper';
import { Card } from 'react-native-elements'

export default class RecetteDetails extends React.Component {
  render(){
    const recette = this.props.route.params.recette;
    return (
      <View style={styles.container}>
        <Card>
          <Card.Title>{recette.titre}</Card.Title>
          <Image style={styles.image}
          source={require('../App_Resources/iOS/ancre.png')} />
          <Card.Divider/>
          {recette.description}
        </Card>
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
  image:{
    width:50,
    height: 50,
    borderColor:'50%',
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  }
});
