import React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Platform} from 'react-native'
import NewsList from './components/NewsList';
import SavedNewsList from './components/SavedNewsList';
import {NewsProvider} from './providers/NewsProvider'

const App = () => {

  return (  
  <NewsProvider> 
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerTxt}>Current News</Text>
    <SavedNewsList/> 
    </SafeAreaView>
   </NewsProvider>  
  );
};
  
export default App;



const styles = StyleSheet.create({
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