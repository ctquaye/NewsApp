import React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Platform} from 'react-native'
//components
import NewsList from './components/NewsList';
import SavedNewsList from './components/SavedNewsList';
import NewsContent from './components/NewsContent';
//context
import {NewsProvider} from './providers/NewsProvider'
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Detail(){
  return(
    <BottomTab.Navigator>
    <BottomTab.Screen name="News Content" component={NewsContent} />
    <BottomTab.Screen name="Saved News" component={SavedNewsList}/>
  </BottomTab.Navigator> 
  )
}

const App = () => {

  return(
  <NewsProvider>   
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Current News" component={NewsList}/>
        <Stack.Screen name="Detail" component={Detail}/>            
      </Stack.Navigator>
    </NavigationContainer>
  </NewsProvider>  
  
  )
};
  
export default App;