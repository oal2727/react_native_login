import React from "react"
import {View,StyleSheet,TouchableOpacity,Text} from "react-native"
import Input from "components/Input"
import Card from "components/Card"
import Button from "components/Button"
import MessageError from "components/MessageError"
import {COLORS} from "../../common/Color"
import {useFormik} from "formik"
import * as Yup from "yup"
import {AuthContext} from "../../context/AuthContext"
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}:any)=>{
  
  const {register,authUser,cleanField}:any = React.useContext(AuthContext)
  const [eye,setEye] = React.useState(false)

  const formik = useFormik({
    initialValues:{
      user:"",
      password:"",
      confirmPassword:""
    },
    validationSchema: Yup.object().shape({
      user:Yup.string().required("Usuario es Requerido").nullable(),
      password: Yup.string()
        .required('Contraseña es requerido').nullable()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Minimo 8 caracters, 1 Mayuscula, 1 Minuscula y 1 Numero"
        ),
        confirmPassword: Yup.string().
        required("Repita nuevamente la contraseña")
        .oneOf([Yup.ref('password')],
        'Las contraseñas deben ser iguales',)
    }),

    onSubmit: values => {
        register(values)
    },
  })

  const changeScreen=()=> {
    navigation.navigate("Login")
    cleanField()
  }


    return(
        <View style={styles.container}>
           <View style={{alignSelf:"center"}}>
           <Card 
           onPress={()=>changeScreen()}
           title={"REGISTRARME"} footer={"Cancelar"}>
                  <View>
                  
                  <Input 
                  id="user"
                  name={"user"}
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
                  name={"password"}
                  icon={"lock"}
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
                   <Input 
                    name={"confirmPassword"}
                    icon={"lock"}
                    password={!eye}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur("confirmPassword")}
                    onChangeText={formik.handleChange("confirmPassword")}
                    placeholder="Confirmar Contraseña"
                  />
                    {
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <MessageError>{formik.errors.confirmPassword}</MessageError>
                  ) : null
                 }

                  <TouchableOpacity style={{flexDirection:"row"}}
                        onPress={()=>setEye(!eye)}>
                          {
                            eye ?
                            <Icon color={"black"} name="eye-slash" size={18}/>
                            :
                            <Icon color={"black"} name="eye" size={18}/>
                          }
                  <Text style={{marginLeft:6,color:"black"}}>{eye ? "Ocultar" : "Ver"} Contraseña</Text>
                      </TouchableOpacity>

                  {
                  authUser.message.show ?
                  <MessageError>{authUser.message.description}</MessageError>
                  :null
                }

                  <Button onPress={formik.handleSubmit}>REGISTRAR</Button>
                  </View>
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