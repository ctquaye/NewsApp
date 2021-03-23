import React,{useState, useEffect, useContext} from 'react'
import {SafeAreaView, View, FlatList, Text, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Search from './Search'


const SavedNewsList=()=>{

    const [loadNews, setLoadNews]=useState([])

    const getData = async ()=>{
        try{
            const value = await AsyncStorage.getItem('@storage_key')
            if(value!==null){
                setLoadNews({token:'@storage_keky'})
            }
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => { 
       getData();
      }, []);
    
    return(
        <SafeAreaView style={styles.container}>
                <Search/>
        <FlatList
                data={loadNews}
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
    }
})
