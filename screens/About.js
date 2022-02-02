import React from "react";
import {View,StyleSheet,Text,Pressable,Image} from 'react-native';
import { Linking } from "react-native";

export const AboutScreen = ({navigation}) => {


    return(    
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                         <Text style={{color:'#000',marginHorizontal:10,marginTop:50}}>Home</Text>
                </Pressable>

                <View style={{alignItems:'center'}}>
                    <Image 
                    style={{ marginTop:10,width: 180, height: 180, borderRadius:200}}
                    source={require('../assets/jwanshak.jpeg')}/>
                    
                </View> 
                
                <Text style={styles.headerText}>Jwanshak Mweltok</Text>
                
                <Text style={styles.titleText}>About Me</Text>
                
                <Text style={styles.fieldText}>I posses a bachelor's degree in computer science and 
                    a very creative mind, which helps address and solve 
                    technical issues with an agile approach to collaborations. I look 
                    forward to a conversation about how my previous experiences 
                    can help you achieve more success.</Text>
                    
                    <Text style={styles.fieldText}>Phone: 08146397088</Text>
                    <Text 
                        onPress={async()=>{await Linking.openURL('https://github.com/techshak')}}
                        style={{fontSize:16,color:'#050C47'}}>Github:techshak
                    </Text>
                    <Text style={styles.fieldText}>jmweltokg@gmail.com</Text>
                
                <Text style={styles.titleText}>Technologies</Text>
                
                <Text style={{fontStyle:"italic",color:'#000',marginVertical:5}}>
                    Kotlin, Android SDK, Android Studio,
                    Microsoft SQL Server, Photoshop, React Native
                </Text>

            </View>
    )

};

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        flexDirection: 'column',
        padding: 24,
        marginTop:20,
    },

    headerText:{
        fontSize:35,
        color:'#000',
        fontWeight:'bold',
        marginVertical:15,
    },
    titleText:{
        fontSize:20,
        color:'#050C47',
        fontWeight:'500',
        marginVertical:5,
    },

    fieldText:{
        fontSize:16,
        color:'#000',
        marginVertical:2,
    },
    
})