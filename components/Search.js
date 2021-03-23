import React, { useContext, useEffect} from 'react'
import {View, TextInput, Button} from 'react-native'
import {NewsContext} from '../providers/NewsProvider'

const Search=()=>{
      const [textIn, setTextIn]=React.useState()
      const [search, setSearch]=React.useState(false)
    useEffect(() => {
      myContext.setInput(textIn)
  }, [search])

  const myContext = useContext(NewsContext)

  return(
    <View style={{marginBottom:'3%'}}>
         <TextInput
      style={{height:40, backgroundColor:'darkgrey', borderRadius:2}}
        onChangeText={((text)=> setTextIn(text))}
        placeholder='search for news'
      />
      <Button 
        testID="myButton"
        title={"Search"}
        color='#112182'
        onPress={()=>setSearch(true)}
      />
      </View>
       
    )

}

export default Search;