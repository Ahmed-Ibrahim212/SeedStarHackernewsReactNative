import React from "react";
import FlatButton from "../components/button";
import { useSelector,useDispatch } from "react-redux";
import { setPassword,setUserName } from "../redux/actions";
import {TouchableOpacity,View,StyleSheet,Text,TextInput,ImageBackground, Alert,Pressable} from 'react-native'
import { openDatabase } from "expo-sqlite";

const db = openDatabase("database");

export const Login = ({navigation}) => {

    const {password,userName} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const getData = async () =>{
        try{
           db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM Users WHERE UserName ='" + userName + "' AND Password = '" + password + "'",
                    [],
                    (tx, results)=>{
                        var len = results.rows.length
                        if(len > 0){
                            var currentUserName = results.rows.item(0).UserName
                            var currentPassword = results.rows.item(0).Password
                            navigation.navigate('Home')
                        } else {
                            Alert("Wrong UserName and Password combination")
                        }
                    }
                );
            })
        }catch (error) {
           Alert(error)
        }
    }

    return(
        
        <ImageBackground 
         style={styles.backgroundImage}
         source={require('../assets/background.jpg')}>
            
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Text style={{color:'#fff',marginTop:50,marginStart:7}}>Read News</Text>
            </Pressable>
            
            <View style={styles.container}>
            
                <Text style={styles.instructionText}>Login</Text>
                
                <Text style={styles.fieldText}>UserName:</Text>
              
                <TextInput 
                        style ={styles.input}
                        placeholder="Username"
                        onChangeText={(value)=> dispatch(setUserName(value))}/>

                <Text style={styles.fieldText}>Password:</Text>
              
               <TextInput 
                      style ={styles.input}
                      placeholder="Password"
                      onChangeText={(value)=> dispatch(setPassword(value))}
                      secureTextEntry/>
                
                <TouchableOpacity onPress={()=> navigation.navigate('Signup')}> 
                <Text style={{color:'#fff',}}>Not a User? SignUp</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>getData()} >
                <FlatButton text='Log In'/>
                </TouchableOpacity>
                
            </View>
        </ImageBackground>
    )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 6,
        marginTop:170,
    },
    input:{
        borderWidth:1,
        width:350,
        borderRadius:10,
        height: 40,
        paddingStart:10,
        fontSize: 14,
        marginBottom:10,
        backgroundColor:'#fff',
    },
    instructionText:{
        fontSize:40,
        color:'#fff',
        fontWeight:'bold',
        marginBottom: 20,
    },
    fieldText:{
        fontSize:16,
        color:'#fff',
        fontWeight:'bold',
        marginTop:10
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },
    queryText:{
        color:'#fff',
        fontWeight:'normal',
    },
})