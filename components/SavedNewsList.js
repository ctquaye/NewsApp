import React,{useState, useEffect, useContext} from 'react'
import {SafeAreaView, View, TouchableOpacity, FlatList, Text, StyleSheet, Button} from 'react-native'
import {NewsContext} from '../providers/NewsProvider'

const SavedNewsList=({navigation})=>{
    const myContext = useContext(NewsContext) 

    console.log(myContext.loadNews.length,"len")
    const  handlePress=()=>{
      myContext.setLoadNews([])
    }

    const handleTouch=(index)=>{
        myContext.setNewsContent(myContext.loadNews[index])
        navigation.navigate('Detail', {screen:'News Content'})
    }
         
    return(
        <SafeAreaView style={styles.container}>
              <Text style={styles.header}>Saved News</Text>
              <Button title="clear" onPress={handlePress} color='#3d878f'/>
        <FlatList
                data={myContext.loadNews}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={()=>handleTouch(index)} >
                        <View style={styles.listItem}>
                            <Text style={{color:'#3d878f', fontWeight:'bold', fontSize:14}}>{item.title}</Text>
                            <Text style={{color:'ivory'}}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                   
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
            backgroundColor:'#3b3737',
            marginTop:'1%',
            marginBottom:'2%',
            padding:'1%',
            borderRadius:5,
    },
    header:{
    fontSize:18,
    fontWeight: 'bold',
    color:'#3a3c52'
    }
    
})
