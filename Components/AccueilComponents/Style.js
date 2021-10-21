import {StyleSheet} from 'react-native'
 export const stylesBtn = StyleSheet.create({
    block:{
    flex:1,
    flexDirection:'row',
    justifyContent : 'space-between',
    /*padding: "2%",*/
    
  },
  combImgText:{
    /*width:70,
    height:60,*/
    flexDirection:'row',
    backgroundColor: 'blue',
    borderRadius:1,
    flex:0.45
    /*position: 'relative',
    zIndex:2*/
  },
  text:{
     /*width: "100%", 
     height: "100%",*/
     textAlign:'center',
     paddingTop: 20,
     fontSize:15,
     paddingRight:10
     /*backgroundColor:"red"*/
  },
  image:{
    width:50,
    height: 50,
    borderColor:'50%',
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  },
})