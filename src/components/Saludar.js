import React from 'react';
import {Text} from 'react-native'


export default function Saludar(props){
    const {name} = props;
    console.log(name);
    return <Text>hola {name} </Text>;
}