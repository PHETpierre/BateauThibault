import * as React from 'react';
import { Button, Image,StyleSheet, Text, View } from 'react-native';
import { Value } from 'react-native-reanimated';
import ImageRestau from './ImageRestaurant';

const MenuSelection = (props) => {
    var contents = console.log(props.menuContents);
    const map = contents.map(key => {
        return(
            <Text>{ key.name }</Text>
        )
    });
    console.log(map);


  return (
          <View>
            <Text>Heelo</Text>
          </View>
  );
};

export default MenuSelection;