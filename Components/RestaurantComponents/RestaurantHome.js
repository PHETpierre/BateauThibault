import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Data from '../../Constantes/dataRestaurants.json';
import RestaurantDesc from './RestaurantDesc';
import Icon from 'react-native-vector-icons/FontAwesome';

var restaurantsList = Data;

export default class RestaurantHome extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (

        <ImageBackground source={require('../../App_Resources/iOS/background.png')} style={{ width: "100%", height: "100%" }} resizeMode="cover" >
        	<View style={styles.simpleFlex}>
	          <Text style={styles.title}>Restaurants partenaires</Text>
		        <Text style={styles.subtitle1}>{"  Tous les restaurants partenaires avec le bateau de Thibault"}</Text>
		        <Text style={styles.subtitle2}>{"06.63.99.99.78\n\tlebateaudethibault@gmail.com\nwww.facebook.com/lebateaudethibault"}</Text>
		    </View>
		    <View style={styles.btnBlock}>
		        {restaurantsList.map((value, index)=>{
		          return <TouchableOpacity 
		          	style={styles.btn}
		            key={index}
		            onPress = {()=>{
		              this.props.navigation.navigate('RestaurantDesc', {id:value.id});
		            }}>
		            <View style={styles.btnFlex}>
			          	<Text style={styles.btnText}>{value.name}</Text>
		          	</View>
		          </TouchableOpacity>
		        })}

		        <TouchableOpacity style={styles.btn}>
		        	<View style={styles.btnFlex} onPress = {()=>{
		              this.props.navigation.navigate('profilGerant');
		            }}>
			          <Text style={styles.btnText}>Devenez partenaire!</Text>
			        </View>
            </TouchableOpacity>
	        </View>
        </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  background:{
    width: "100%",
    height: "100%"
  },
  btnBlock:{
  	flex: 1,
  	flexDirection:"row",
  	flexWrap: 'wrap',
  	marginLeft: '2%',
  	marginRight: '2%',
    justifyContent: 'space-between',
  },
  photo:{
    width:'31%',
    height: '45%',
    borderColor:'50%',
    marginLeft:'10%',
    marginTop:'20%',
    marginBottom:'30%'
  },
  btn:{
    width: '49%',
    height: '31.5%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderColor: 'black',
    borderWidth: 1,
  },
  btnText:{
    marginTop: '30%',
    marginLeft: '16%',
    textAlign: 'center',
    fontSize:'80%',
    color: "white",
 },
 btnFlex:{
 	flex:2,
 	flexDirection:"row",
 },
 simpleFlex:{
 	flex:1
 },
 title:{
 	fontSize: '150%',
 	textAlign: 'center',
 	marginTop: '15%',
 	color: 'white',
 	fontFamily: "San Francisco"
 },
 subtitle1:{
 	textAlign: "center",
 	marginTop: '25%'
 },
 subtitle2:{
 	textAlign: "center",
 	opacity: 0.4,
 	fontFamily: "Didot"
 }
})

