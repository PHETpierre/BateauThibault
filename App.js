import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './Constantes/accueil.css'
import Produit from './Components/AccueilComponents/Produit';
import Recettes from "./Screens/Recettes";
import RecetteDetails from "./Screens/RecetteDetails";
import profilGerant from "./Screens/profilGerant";
import AccueilScreen from "./Screens/AccueilScreen";
import BateauScreen from "./Screens/BateauScreen";

import BateauHome from './Components/BateauComponents/BateauHome';
import BateauDesc from './Components/BateauComponents/BateauDesc';
import RestaurantHome from './Components/RestaurantComponents/RestaurantHome';
import RestaurantDesc from './Components/RestaurantComponents/RestaurantDesc';

import CatProduit from './Components/Panier/CatProduit';
import Achat from './Components/Panier/Achat.js';
import Poissons from './Components/Panier/Poissons';
import Crustaces from './Components/Panier/Crustaces';
import Coquillages from './Components/Panier/Coquillages';
import Promotions from './Components/Panier/Promotions';
import { AppContext } from './Components/ContextApp/ContextApp';

import data from './Constantes/Produits.json';
const Stack = createStackNavigator();

//var productItems=[];
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state= { productItems: [] }
  }

  addProduct(selectedProduct){
    let productItems= this.state.productItems;
    productItems.push(selectedProduct);
    this.setState({productItems: productItems});
  }

  render(){
    return (
      <AppContext.Provider
      value={{
        productItems: this.state.productItems,
        addProduct: this.addProduct.bind(this),
        data
      }}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name = "Acceuil"
            component = {AccueilScreen}
          />
          <Stack.Screen
            name = "Recettes"
            component = {Recettes}
          />
          <Stack.Screen
            name = "Profil du gerant"
            component = {profilGerant}
          />
          <Stack.Screen
            name = "Details de la recette"
            component = {RecetteDetails}
          />
          <Stack.Screen
            name = "Bateau"
            component = {BateauScreen}
          />
          <Stack.Screen
            name = "BateauHome"
            component = {BateauHome}
          />
          <Stack.Screen
            name = "BateauDesc"
            component = {BateauDesc}
          />
          <Stack.Screen
            name = "Restaurant Home"
            component = {RestaurantHome}
          />
          <Stack.Screen
            name = "RestaurantDesc"
            component = {RestaurantDesc}
          />
          <Stack.Screen
            name = "Produits correspondant Poissons"
            component = {Poissons}
          />
          <Stack.Screen
            name = "Produits correspondant Crustacés"
            component = {Crustaces}
          />
          <Stack.Screen
            name = "Produits correspondant Coquillages"
            component = {Coquillages}
          />
          <Stack.Screen
            name = "Produits correspondant Promotions"
            component = {Promotions}
          />
          <Stack.Screen
            name = "Les produits de la semaine"
            component = {CatProduit}
          />

        </Stack.Navigator>
      </NavigationContainer>
      </AppContext.Provider>
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
