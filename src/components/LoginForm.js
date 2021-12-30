import React from 'react';
import {TextInput,Button,Text,View} from "react-native"


export default function LoginForm(){
    return (
        <View>
          <TextInput placeholder='Email'/>
          <TextInput placeholder='contrasena'/>
          <TextInput placeholder='nombre'/>
         <Button title='Enviar' onPress={() => console.log("Enviado")}/>  

        </View>

    );
    
}