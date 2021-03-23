import React,{useState,useEffect} from 'react'
import Context from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Platform} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const NewsContext = React.createContext();

const NewsProvider = (props) => {
const [savedNews, setSavedNews] = useState([]);
const [input, setInput]=useState('schools')   
const [news, setNews]=useState([])
const [search, setSearch]=useState(false)

const storeData = async ()=>{
  try{
    if (savedNews !== 0) {
     await AsyncStorage.setItem('@storage_key', `${savedNews}`);
    }
  }
  catch(err){
    console.log(err)
  }  
}

  useEffect(() => {
    storeData()
  }, [savedNews]);

  useEffect(() => { 
    AsyncStorage.getItem('@storage_key').then((value) => {
      if (value) {
        set(parseInt(value));
      }
    });
  }, []);

  return (
    <NewsContext.Provider 
    value={{ 
      savedNews,setSavedNews,
      input, setInput,
      news, setNews,
      search ,setSearch
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export {NewsProvider, NewsContext };