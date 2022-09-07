import React from "react"
import {Text,View,StyleSheet,TouchableOpacity} from "react-native"
import {COLORS} from "../common/Color"
import {FONTNAME} from "../common/FontName"

const Card = ({title,children,footer,onPress}:any)=>{
  return(
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.body}>
       {children}    
       </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={onPress}>
          <Text style={styles.footerText}>{footer}</Text>
          </TouchableOpacity>
        </View>
    </View>
  )

}

const styles = StyleSheet.create({
  card:{
    width:280,
    elevation:3,
      shadowOffset:{
        width:0,
        height:4
    },
    shadowOpacity:0.5,
    backgroundColor:COLORS.card
  },
  header:{
    backgroundColor:COLORS.primary,
    padding:10
  },
  headerText:{
    fontFamily:FONTNAME.InterBold,
    fontWeight:"bold",
    alignSelf:"center",
    color:"white",
    fontSize:24,
  },
  body:{
    padding:25,
  },
  footer:{
    padding:12,
     backgroundColor:COLORS.footer
  },
  footerText:{
    alignSelf:"center",
    color:COLORS.footerText,
    fontFamily:FONTNAME.InterBold,
    fontSize:12,
    lineHeight:15,
    textDecorationLine:"underline"
  }
})

export default Card;