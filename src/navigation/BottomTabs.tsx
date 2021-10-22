import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ChatScreen from '../screens/ChatScreen'
import HomeScreen from '../screens/HomeScreen/index'
import ProfileScreen from '../screens/ProfileScreen'
import TabOne from './TabOne'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e31e69',
        tabBarInactiveTintColor: '#ffbd7b',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="MyFavs"
        component={TabOne}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
