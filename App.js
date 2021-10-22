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

//Add Element
/*const increase=(arrList,elt)=>{
  let index=arrList.find(elt)
  arrList[index].nbreItimes+=1,
  arrList[index].amount=arrList[index].nbreItimes*arrList[index].price
  return arrList
}*/

//Decrease Element
/*const decrease=(arrList,elt)=>{
  var copyArrList=arrList
  let index=copyArrList.find(elt)
  if(copyArrList[index].nbreItimes>=0){
    copyArrList[index].nbreItimes-=1,
    copyArrList[index].amount=copyArrList[index].nbreItimes*copyArrList[index].price
  }
  return arrList
}*/

//var productItems=[];
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state= { productItems: [] }
  }

  addProduct(name, price){
    var productItems= this.state.productItems;
    console.log(productItems,'avant')
    if (productItems.length == 0 || productItems.filter(elt=>elt.name==name).length==0){
      productItems.push({name,price,nbreItimes:1,amount:price});
    }
    console.log(productItems,"après")
    this.setState({productItems:productItems})
    //console.log(this.state.productItems,"click")
  }
  addNumItems(name){
    var productItems=this.state.productItems;
    var List=productItems.filter(elt=>elt.name==name)[0];
    var index=productItems.indexOf(List);
    //console.log(index,"index")
    //console.log(productItems[index].amount,"price de")
    //console.log(index,"trouver")
    productItems[index].nbreItimes+=1,
    productItems[index].amount=productItems[index].nbreItimes*
                                productItems[index].price
    //console.log(productItems,"changer")
    this.setState({productItems: productItems})
  }
  
  decreaseNumItems(name){
    var productItems=this.state.productItems;
    var List=productItems.filter(elt=>elt.name==name)[0];
    var index=productItems.indexOf(List);
    //console.log(index,"index")
    //console.log(productItems.indexOf(index),"trouver")
    if(productItems[index].nbreItimes>=1){
        productItems[index].nbreItimes-=1,
        productItems[index].amount=productItems[index].nbreItimes*
                                  productItems[index].price
    }
    this.setState({productItems: productItems})
  }

  render(){
    return (
      <AppContext.Provider
      value={{
        productItems: this.state.productItems,
        addProduct: this.addProduct.bind(this),
        data,
        addNumItems:this.addNumItems.bind(this),
        decreaseNumItems:this.decreaseNumItems.bind(this)
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
            name = "Les produits de la semaine"
            component = {CatProduit}
          />
          <Stack.Screen
            name = "Produits correspondant Poissons"
            component = {Poissons}
          />
          <Stack.Screen
            name = "Produits correspondant Coquillages"
            component = {Coquillages}
          />
          
          {/*<Stack.Screen
            name = "Produits correspondant Poissons"
            component = {Poissons}
          />*/}
          <Stack.Screen
            name = "Produits correspondant Crustacés"
            component = {Crustaces}
          />
          {/*<Stack.Screen
            name = "Produits correspondant Coquillages"
            component = {Coquillages}
          />*/}
          <Stack.Screen
            name = "Produits correspondant Promotions"
            component = {Promotions}
          />
          <Stack.Screen
            name = "Achat des produits"
            component = {Achat}
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
