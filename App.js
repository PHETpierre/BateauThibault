import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './Constantes/accueil.css'

import Recettes from "./Screens/Recettes";
import RecetteDetails from "./Screens/RecetteDetails";
import profilGerant from "./Screens/profilGerant";
import AccueilScreen from "./Screens/AccueilScreen";
import CatProduit from './Components/Panier/CatProduit';
import Achat from './Components/Panier/Achat.js';
import Poissons from './Components/Panier/Poissons';
import Crustaces from './Components/Panier/Crustaces';
import Coquillages from './Components/Panier/Coquillages';
import Promotions from './Components/Panier/Promotions';
import { AppContext } from './Components/ContextApp/ContextApp';
import data from './Constantes/Produits.json'
const Stack = createStackNavigator();

export default function App() {
  var productItems=[];


  return (
    // <View className="accueil">
    //   <Produit/>
    //   <StatusBar style="auto" />
    // </View>
    <AppContext.Provider value={{
      data,
      productItems
    }}>
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name = "Produits correspondant Poissons"
          component = {Poissons}
        />
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
          name = "Achat des produits"
          component = {Achat}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
