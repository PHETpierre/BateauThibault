import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
import Bateau from './Bateau'
import Contact from './Contact'
import Produit from './Produit'
import Recette from './Recette'
import Restaurant from './Restaurant'
//import { ContextAccueil } from './ContextAccueil'
const Accueil = () => {
    return (
        
            <View>
                {/*<Image style={styles.background} 
                source={require('../../App_Resources/iOS/background.png')} />*/}
                <Produit/>
                <View>
                    <View style={styles.combTouch}>
                        <Bateau style={styles.styleTouch}/>
                        <Restaurant style={styles.styleTouch2}/>
                    </View>
                    <View>
                        <Recette/>
                        <Contact/>
                    </View>
                </View>
            </View>
        
    )
}

export default Accueil

const styles=StyleSheet.create({
    background:{
        width:300,
        height:300
    },
    blockTouch:{
        
    },
    combTouch:{
        width: "100%",
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        
        /*paddingLeft:"2%",
        paddingRight:"2%"*/
    },
    styleTouch:{
        flex:1,
        /*paddingLeft:"2%",
        paddingRight:"2%"*/
    },
    styleTouch1:{
        flex:1
    }

})


