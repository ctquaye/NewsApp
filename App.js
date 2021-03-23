import React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Platform} from 'react-native'
//components
import NewsList from './components/NewsList';
import SavedNewsList from './components/SavedNewsList';
//context
import {NewsProvider} from './providers/NewsProvider'
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {

  return(
  <NewsProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Current News" component={NewsList} />
        <Tab.Screen name="Saved News"  component={SavedNewsList} />
      </Tab.Navigator>
    </NavigationContainer>
  </NewsProvider>  
  
  )
};
  
export default App;