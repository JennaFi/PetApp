import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import BottomTabs from './BottomTabs'

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <View style={{ height: '100%' }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </View>
  )
}

export default Navigation
