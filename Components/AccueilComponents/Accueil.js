import React from 'react'
import { ImageBackground,StyleSheet,Image, Text, View } from 'react-native'
import Bateau from './Bateau'
import Contact from './Contact'
import Produit from './Produit'
import Recette from './Recette'
import Restaurant from './Restaurant'
//import { ContextAccueil } from './ContextAccueil'
const Accueil = () => {
    return (
        
            <View style={styles.page}>
                <ImageBackground 
                source={require('../../App_Resources/iOS/background.png')} 
                style={styles.background} >
                <Produit/>
                <View>
                    <View style={styles.combTouch}>
                        <Bateau style={styles.styleTouch}/>
                        <Restaurant style={styles.styleTouch}/>
                    </View>
                    {/*<Bateau style={styles.styleTouch}/>*/}
                    <View style={styles.combTouch}>
                        <Recette/>
                        <Contact/>
                    </View>
                </View>
                </ImageBackground>
            </View>
        
    )
}

export default Accueil

const styles=StyleSheet.create({
   
    background:{
        flex:1
    },
    blockTouch:{
        
    },
    combTouch:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        /*marginBottom:10,*/
        paddingHorizontal:"2%"
    },
    
    styleTouch:{
        flex:.1
    }

})


