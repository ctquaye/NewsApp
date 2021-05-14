import React, {useContext}from 'react'
import {View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import { NewsContext } from '../providers/NewsProvider'
const NewsContent =() => {

const context = useContext(NewsContext)
const handlePress=()=>{
 context.setSavedNews([...context.savedNews, context.newsContent])
}
    return(
        <SafeAreaView style={styles.parentView}>            
            <View style={styles.titleView}>
            <Text style={styles.titleText}>Title</Text>
             <Text style={styles.titleContent}>{context.newsContent.title}</Text>
            </View>
            <View style={styles.contentView}>
            <Text style={styles.contentTitle}>Content</Text>
             <Text style={styles.contentText}>{context.newsContent.content}</Text>
            </View>
            <View style={{width:'50%', justifyContent:'center'}}>
            <Button
            title='save'
            color='#6f7868'
            onPress={handlePress}/>
            </View>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parentView:{
        justifyContent:'center',
        alignItems:'center',  
    },
    titleView:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3b3737',
        margin:'2%',
        padding:'1%',
        borderRadius:5,
    },
    contentView:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3b3737',
        margin:'2%',
        padding:'1%',
        borderRadius:5,
    },
    titleText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#b8d9f5'
    },
    contentTitle:{
        fontSize:25,
        fontWeight:'bold',
        color:'#b8d9f5'
    },
    titleContent:{
        fontSize:15,
        color:'white'
    },
    contentText:{
        fontSize:15,
        color:'white'
    }
})

export default NewsContent;