import React,{useState,useEffect} from 'react'
import Context from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Platform} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const NewsContext = React.createContext();

const NewsProvider = (props) => {
const [savedNews, setSavedNews] = useState([]);
const [input, setInput]=useState('news')   
const [news, setNews]=useState()
const [search, setSearch]=useState(false)
const [loadNews, setLoadNews]=useState([])

const getData = async ()=>{
    try{
        const value = await AsyncStorage.getItem('newsObj')
        if(value!==null){
            setLoadNews(JSON.parse(value))
        }
    }
    catch(e){
        console.log(e)
    }
}

useEffect(() => { 
   getData();
  }, []);


const storeData = async ()=>{
  try{
    if (savedNews !== 0) {
     await AsyncStorage.setItem('newsObj', JSON.stringify(savedNews));
    }
  }
  catch(err){
    console.log(err)
  }  
}

  useEffect(() => {
    storeData()
  }, [savedNews]);
  
  return (
    <NewsContext.Provider 
    value={{ 
      savedNews,setSavedNews,
      input, setInput,
      news, setNews,
      search ,setSearch,
      loadNews, setLoadNews
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export {NewsProvider, NewsContext };