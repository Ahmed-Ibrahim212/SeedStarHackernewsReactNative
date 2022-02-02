import React,{ useEffect, useState } from "react";
import { NewsItemCard } from "../components/NewsItemCard";
import { View,Alert, FlatList,StyleSheet,Text,BackHandler, Pressable } from 'react-native';
import axios from "axios";


export const HomeScreen = ({navigation}) =>{

    const [stories,setStories] = useState([]);
    const [page,setPage] = useState(0);
    
    useEffect(()=>{
        getStories()
    },[page]);

    async function getStories() {
      try{
        let response = await axios
        .get(`https://hn.algolia.com/api/v1/search_by_date?numericFilters=points%3E250&page=${page}`)
        let json = await response.data
        setStories([...stories, ...json.hits])
      }catch(error){
         Alert(
          "App Ran Into an Error:",error,
          [
            {text:"Reload", onPress:()=> getStories()},
            {text:"Yes", onPress:()=> BackHandler.exitApp()},
         ],
         {cancelable: false})
      }
      
    }
    
    return(
        
        <>
        <View>
        <View style={styles.navBar}>
        <Text style={styles.headerText}>Hacker News</Text>

         <Pressable onPress={() => navigation.navigate('About')}>
              <Text style={{color:'#000',marginHorizontal:10,marginTop:50}}>About</Text>
         </Pressable>

         <Pressable onPress={() => navigation.navigate('About')}>
              <Text style={{color:'#000',marginHorizontal:10,marginTop:50}}>SignIn</Text>
         </Pressable>

        </View>
        
         <FlatList 
           data = {stories}
           onEndReachedThreshold={1}
           onEndReached={()=> setPage(page+1)}
           renderItem={({item})=>{
            return(
             <NewsItemCard heading={item.title} url={item.url} author={item.author} points={item.points}/>
        );
      }}
      />
      </View>
      
        </>
        
    );

};

const styles = StyleSheet.create({  
    headerText:{
      fontSize:24,
      fontWeight:'bold',
      marginTop:40,
      marginHorizontal:10,
    },
    navBar:{
     flexDirection:'row',
     width:'100%',
     justifyContent:'space-between',
     borderRadius:40,
    }
  });