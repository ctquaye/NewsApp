import React, { useContext} from 'react'
import {View, TextInput, Button} from 'react-native'

const Search=()=>{
    return(
    <View style={{marginBottom:'3%'}}>
         <TextInput
      style={{height:40, backgroundColor:'darkgrey', borderRadius:2}}
        onChangeText={((text)=>setInput(text))}
        placeholder='search for news'
      />
      <Button 
        testID="myButton"
        title={"Search"}
        color='#112182'
        onPress=''
      />
      </View>
       
    )

}

export default Search;