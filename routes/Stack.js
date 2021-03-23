import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import NewList from '../components/NewsList';
import SavedNewsList from '../components/SavedNewsList';

const screens={
    NewList:{
        screen: NewList
    },
    SavedNewsList:{
        screen: SavedNewsList
    }
}

const ListStack = createStackNavigator(screens)

ListStack.navigationOptions={
    NewList:'current'
}

ListStack.navigationOptions={
    SavedNewsList:'saved'
}

export default createAppContainer(ListStack)