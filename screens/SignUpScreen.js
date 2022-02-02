import React, {useEffect} from "react";
import FlatButton from "../components/button";
import { useSelector,useDispatch } from "react-redux";
import { setName,setPassword,setUserName } from "../redux/actions";
import {View,StyleSheet,Text,TextInput,ImageBackground,TouchableOpacity, Alert,Pressable} from 'react-native'
import { openDatabase } from "expo-sqlite";

const db = openDatabase("database");

export function SignUpScreen({navigation}) {

    const {name,password,userName} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
    createTable();
    },[])

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                +"Users"
                +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, UserName TEXT, Password TEXT);"
            )
        })
    }

    const setData = async () =>{
        try{
            setUserName(userName)
            setName(name)
            setPassword(password)

           db.transaction((tx) => {
                tx.executeSql(
                    "INSERT INTO Users(Name,UserName,Password) VALUES ('" + name + "','" + userName + "','" + password + "')"
                );
            })

            navigation.navigate('Login')
            
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
            
                <Text style={styles.instructionText}>Sign Up</Text>
                
                <Text style={styles.fieldText}>Name:</Text>
                
                <TextInput 
                        style ={styles.input}
                        placeholder="Name e.g John Doe"
                        onChangeText={(value)=> dispatch(setName(value))}/>
                
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

                <TouchableOpacity onPress={()=> navigation.navigate('Login')}> 
                    <Text style={{color:'#fff',}}>Already a User? Login</Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={()=>setData()} >
                    <FlatButton text='Sign Up'/>
                </TouchableOpacity>
                
            </View>
        </ImageBackground>
    )


};

const styles = StyleSheet.create({
    container:{
        padding: 6,
        marginTop:90,
    },
    input:{
        borderWidth:1,
        width:320,
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