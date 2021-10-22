import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import FavoritesScreen from '../../.history/src/screens/FavoritesScreen/index_20211022021219'
import PetScreen from '../screens/PetScreen/index'

const HomeStack = createStackNavigator()

const TabOne = () => {
  return (
    <View style={{ height: '100%' }}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="PetScreen"
          component={PetScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </View>
  )
}

export default TabOne
