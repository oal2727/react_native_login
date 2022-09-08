import React from "react"
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import {FONTNAME} from "../common/FontName"
import {COLORS} from "../common/Color"

const IconButton = ({image,description,onPress}:any)=>{
  return(
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.box}>
    <Image style={{width:50,height:50,marginTop:10,alignSelf:"center",alignItems:"center"}} source={image}/>
    </View>
    <Text style={styles.textIcon}>{description}</Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:"column",
    textAlign:"center",

  },
  textIcon:{
    alignSelf:"center",
    textAlign:"center",
    fontSize:14,
    marginTop:10,
    color:COLORS.textColor,
    fontFamily:FONTNAME.InterLight
  },
  box:{
    width:70,
    height:70,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor:"#FFFFFF",
    elevation:1,
    shadowOffset:{
            width:0,
            height:2
        },
    shadowOpacity:0.3,
    borderRadius:80,
    shadowRadius:2,
  },
  icon:{
    lineHeight:60,
    textAlign:"center",
    fontSize:30 
  }
})
export default IconButton;