import React,{useState, useEffect, useContext} from 'react'
import Context from 'react'
import {SafeAreaView, View, FlatList, Text, StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native'
import axios from 'axios'
import Search from './Search'
import {NewsContext} from '../providers/NewsProvider'

const NewsList=()=>{

    const myContext = useContext(NewsContext)
    //api call to newsapi.org        
    const getNews= async()=>{
        const apiUrl = 'http://newsapi.org/v2/everything?apiKey=3493bbe0e5ac45699d9b311278dc412f&q='+myContext.input; 
        const response = await axios.get(apiUrl);
        console.log('input', myContext.input)
        myContext.setNews(response.data.articles)
    }

    useEffect(() => {
       getNews()
    }, [myContext.search])
    
    const handlePress =(index)=>{
        myContext.setSavedNews([...myContext.news,myContext.news[index]])
       // console.log('authour', myContext.news[index].author, myContext.savedNews)
    }
    
    return(
        <SafeAreaView style={styles.container}>
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
    }
})