import React,{useState, useEffect, useContext} from 'react'
import Context from 'react'
import {SafeAreaView, View, FlatList, Text, StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native'
import axios from 'axios'
import Search from './Search'
import {NewsContext} from '../providers/NewsProvider'

const NewsList=({})=>{

    const myContext = useContext(NewsContext)
    //api call to newsapi.org        
    const getNews= async()=>{
        const apiUrl = 'http://newsapi.org/v2/everything?apiKey=9d18d11ff9944b7cbbfe163458233747&q='+myContext.input; 
        const response = await axios.get(apiUrl);
        console.log('input', myContext.input)
        myContext.setNews(response.data.articles)
    }

    useEffect(() => {
       getNews()
    }, [myContext.search])
    
    const handlePress =(index)=>{
        myContext.setSavedNews([...myContext.savedNews, myContext.news[index]])
        console.log('authour',myContext.savedNews)
    }
    
    return(   
        <SafeAreaView style={styles.header}>
                <Text style={styles.headerTxt}>Current News</Text>
        <View style={styles.container}>       
        <Search/>
        <FlatList
                data={myContext.news}
                renderItem={({ item, index }) => (
                    <View style={styles.listItem}>
                        <TouchableOpacity onPress={()=>handlePress(index)}>
                        <Text style={{color:'#2d3acc', fontWeight:'bold', fontSize:14}}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        </TouchableOpacity>                       
                    </View>
                    )}
                    keyExtractor={(item,index)=>index.toString()}
            />       
        </View>
        </SafeAreaView>
    )
  }

export default NewsList;

const styles = StyleSheet.create({
    container:{
        margin:'3%'
    },
    listItem:{
        backgroundColor:'#e1f0ef',
        marginBottom:'5%',
        padding:'1%'
    },
    header:{
        fontFamily:'Roboto',      
        justifyContent:'center',
        alignItems:'center', 
        marginTop: Platform.OS ==='android'? '4%':''
      },
      headerTxt:{
        fontSize:18,
        fontWeight: 'bold',
        color:'#3a3c52'
      }
})