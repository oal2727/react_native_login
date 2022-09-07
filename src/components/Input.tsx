import React from "react"
import {TextInput,View,StyleSheet} from "react-native"
import {FONTNAME} from "../common/FontName"
import Icon from 'react-native-vector-icons/FontAwesome';


const Input = ({placeholder,value,icon,onBlur,id,name,onChangeText,password}:any)=>{
  return(
    <View style={styles.box}>
                <Icon name={icon} style={styles.iconInput}  />

      <TextInput
        style={styles.input}
        secureTextEntry={password}
       onChangeText={onChangeText}
       value={value}
       onBlur={onBlur}
       placeholder={placeholder}
      />
      
    </View>
  )

}
const styles = StyleSheet.create({
  box:{
    marginBottom:18,
    position:"relative",
 
    flexDirection:"row"
  },
  iconInput:{
    position:"absolute",
    fontSize:25,
    color:"rgba(0, 0, 0, 0.5)",
    paddingRight:5,
    lineHeight:25
  },
  input:{
    boxSixing: "border-box",
    fontFamily:FONTNAME.InterMedium,
    borderBottomWidth:1,
    color:"rgba(0, 0, 0, 0.5)",
    borderBottomColor:"#000000",
    width:220,
    paddingHorizontal: 30,
    height:30,
    padding:5,
    fontSize:12,
    lineHeight:15
  },
})
export default Input;