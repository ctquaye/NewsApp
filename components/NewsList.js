import React,{useState, useEffect, useContext} from 'react'
import {SafeAreaView, View, FlatList, Text, StyleSheet} from 'react-native'
import axios from 'axios'
import Search from './Search'
import {NewsContext} from '../App'

const NewsList=()=>{

    const context = useContext(NewsContext)
    
    //api call to newsapi.org        
    const getNews= async()=>{
        const apiUrl = 'http://newsapi.org/v2/everything?apiKey=3493bbe0e5ac45699d9b311278dc412f&q='+input; 
        const response = await axios.get(apiUrl);
        //console.log(response.data.articles)
        context.setNews(response.data.articles)
    }

    useEffect(() => {
       getNews()
    }, [])

   /* const handleTextChange=(text)=>{
        setSearch(false)
        {(text)=>setInput(text)}
    }
    const handlePress=()=>{
        setSearch(true)
        console.log(input)
    }*/
       
    return(
        <SafeAreaView style={styles.container}>
                <Search/>
        <FlatList
                data={news}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={{color:'#3d878f', fontWeight:'bold', fontSize:14}}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                  )}
                keyExtractor={item => news.id}
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
        backgroundColor:'#d8dae6',
        marginBottom:'5%',
        padding:'1%'
    }
})