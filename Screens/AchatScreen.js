import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Title } from 'react-native-paper';
import Achat from "../Components/Panier/Achat";
import { globalStyle } from '../styles';

export default class AccueilScreen extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={globalStyle.container}>
        <Achat/>
      </View>
    );
  }
}
