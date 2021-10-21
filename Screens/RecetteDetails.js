import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { Title } from 'react-native-paper';
import { Card } from 'react-native-elements';
import { globalStyle } from '../styles';

export default class RecetteDetails extends React.Component {
  render(){
    const recette = this.props.route.params.recette;
    return (
      <ImageBackground
      source={require('../App_Resources/iOS/background.png')}
      style={globalStyle.backgroundImage} >
        <View style={[globalStyle.container, globalStyle.w70percent]}>
          <View style={styles.containerCard}>
            <Card>
              <Card.Title>{recette.titre}</Card.Title>
              <View style={styles.imgContainer}>
                <Image style={styles.image}
                source={require('../App_Resources/iOS/ancre.png')} />
              </View>
              <Card.Divider/>
              <Text>{recette.description}</Text>
            </Card>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
  },
  imgContainer: {
    width: '100%',
    alignItems: 'center',
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
