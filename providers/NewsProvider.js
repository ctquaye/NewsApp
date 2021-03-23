import React,{useState, useEffect, useContext, createContext} from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Platform} from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage';

import NewsList from './components/NewsList'

const NewsContext = createContext();

const useNews = () => useContext(NewsContext);

const NewsProvider = ({ children }) => {
const [savedNews, setSavedNews] = useState(['hello','there']);
const [input, setInput]=useState('schools')   
const [news, setNews]=useState([])
const [search, setSearch]=useState(false)
  /*useEffect(() => {
    if (savedNews !== 0) {
      AsyncStorage.setItem('@storage_key', `${savedNews}`);
    }
  }, [savedNews]);

  useEffect(() => {
    AsyncStorage.getItem('@storage_key').then((value) => {
      if (value) {
        set(parseInt(value));
      }
    });
  }, []);*/

  return (
    <NewsContext.Provider value={{ savedNews: savedNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export {NewsProvider, NewsContext };