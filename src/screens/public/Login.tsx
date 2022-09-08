import React from "react"
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"
import Input from "components/Input"
import Card from "components/Card"
import Button from "components/Button"
import {COLORS} from "../../common/Color"
import {useFormik} from "formik"
import * as Yup from "yup"
import {AuthContext} from "../../context/AuthContext"
import MessageError from "components/MessageError"
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = ({navigation}:any)=>{

  const {login,authUser,cleanField}:any = React.useContext(AuthContext)
  const formik = useFormik({
    initialValues:{
      user:"",
      password:"",
    },
    validationSchema: Yup.object().shape({
      user:Yup.string().required("Usuario es Requerido").nullable(),
      password: Yup.string().required("Contraseña es Requerido").nullable()
    }),
    onSubmit: values => {
      login(values)
    },
  })

  const [eye,setEye] = React.useState(false)

  const changeScreen=()=> {
    navigation.navigate("Register")
    cleanField()
  }


    return(
        <View style={styles.container}>
           <View style={{alignSelf:"center"}}>
           <Card 
            onPress={()=>changeScreen()}
           title={"INICIAR SESIÓN"} footer={"Registrarme"}>
          

                <Input 
                icon={"user"}
                value={formik.values.user}
                onBlur={formik.handleBlur("user")}
                onChangeText={formik.handleChange("user")}
                placeholder="Usuario"
                />
                  {
                  formik.touched.user && formik.errors.user ? (
                    <MessageError>{formik.errors.user}</MessageError>
                  ) : null
                 }
                <Input 
                  id="password"
                  icon={"lock"}
                  name={"password"}
                  password={!eye}
                  value={formik.values.password}
                  onBlur={formik.handleBlur("password")}
                  onChangeText={formik.handleChange("password")}
                  placeholder="Contraseña"
                />
                    {
                  formik.touched.password && formik.errors.password ? (
                    <MessageError>{formik.errors.password}</MessageError>
                  ) : null
                 }


                  <TouchableOpacity style={{flexDirection:"row"}}
                  onPress={()=>setEye(!eye)}>
                    {
                      eye ?
                      <Icon name="eye-slash" color={"black"} size={18}/>
                      :
                      <Icon name="eye" color={"black"} size={18}/>
                    }
                  <Text style={{marginLeft:6,color:"black"}}>{eye ? "Ocultar" : "Ver"} Contraseña</Text>
                </TouchableOpacity>

                {
                  authUser.message.show ?
                  <MessageError>{authUser.message.description}</MessageError>
                  :null
                }

         

                <Button onPress={formik.handleSubmit}>INGRESAR</Button>
                </Card>

           </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:COLORS.background
  }
});

export default Login;