import React,{useState, useEffect, useContext} from 'react'
import {SafeAreaView, View, FlatList, Text, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {NewsContext} from '../providers/NewsProvider'

const SavedNewsList=()=>{

    const myContext = useContext(NewsContext)    
    return(
        <SafeAreaView style={styles.container}>
              <Text style={styles.header}>Saved News</Text>
        <FlatList
                data={myContext.loadNews}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={{color:'#3d878f', fontWeight:'bold', fontSize:14}}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                  )}
                  keyExtractor={(item,index)=>index.toString()}
            />   
        </SafeAreaView>
    )
  }

export default SavedNewsList;

const styles = StyleSheet.create({
    container:{
        margin:'3%'
    },
    listItem:{
        backgroundColor:'#d8dae6',
        marginBottom:'5%',
        padding:'1%'
    },
    header:{
    fontSize:18,
    fontWeight: 'bold',
    color:'#3a3c52'
    }
    
})
