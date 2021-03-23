import React, { useContext, useEffect} from 'react'
import {View, StyleSheet, TextInput, Button, SafeAreaView, AppRegistry} from 'react-native'
import {NewsContext} from '../providers/NewsProvider'

const Search=()=>{
      const [textIn, setTextIn]=React.useState()
      const [search, setSearch]=React.useState(false)
    useEffect(() => {
      myContext.setInput(textIn)
      myContext.setSearch(search)
  }, [search])

  const myContext = useContext(NewsContext)

  const handleTextChange =(text)=>{
    setSearch(false)
    setTextIn(text)
  }  
  return(
    <View style={{marginBottom:'3%', }}>
         <TextInput
      style={{height:40, backgroundColor:'darkgrey', borderRadius:2}}
        onChangeText={handleTextChange}
        placeholder='search for news'
      />
      <Button 
        title={"Search"}
        color='#112182'
        onPress={()=>setSearch(true)}
      />
      </View>
    )

}

export default Search;

