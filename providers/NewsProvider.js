import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage';

const NewsContext = React.createContext();

const NewsProvider = (props) => {
const [savedNews, setSavedNews] = useState([]);
const [input, setInput]=useState('news')   
const [news, setNews]=useState()
const [search, setSearch]=useState(false)
const [loadNews, setLoadNews]=useState([])
const [newsContent, setNewsContent]=useState()

const getData = async ()=>{
    try{
      console.log('try')
        const value = await AsyncStorage.getItem('newsObj')
        if(value!==null){
            console.log('now')
            setLoadNews(JSON.parse(value))
        }
    }
    catch(e){
        console.log(e)
    }
}

useEffect(() => { 
   getData();
  }, [savedNews]);


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
      loadNews, setLoadNews,
      newsContent, setNewsContent
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export {NewsProvider, NewsContext };