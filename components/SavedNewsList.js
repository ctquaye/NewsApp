import React,{useState, useEffect, useContext} from 'react'
import {SafeAreaView, View, FlatList, Text, StyleSheet} from 'react-native'

const SavedNewsList=()=>{
    return(
        <SafeAreaView style={styles.container}>
                <Search/>
        <FlatList
                data={myContext.news}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={{color:'#3d878f', fontWeight:'bold', fontSize:14}}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                  )}
                keyExtractor={item => myContext.news.id}
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