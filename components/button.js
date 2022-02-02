import React from "react";
import { StyleSheet,Text,View } from "react-native";

export default function FlatButton({text}){
    
      return ( 
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
        )

}
const styles = StyleSheet.create({
    button:{
        marginTop:15,
        borderRadius:8,
        padding:10,
        width: 100,
        backgroundColor:'#1243CA',
    },
    buttonText:{
        color: '#fff', 
        fontWeight:'bold',
        fontSize:16,
        textAlign:"center",
    },
})