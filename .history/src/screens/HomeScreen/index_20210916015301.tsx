import React from 'react'
import { Text, View } from 'react-native'
import PetCard from '../../components/PetCard/PetCard'

const HomeScreen = ({petItem}) => {
  return (
    <View>
      <Text>hello</Text>
     
      <PetCard {...petItem} />
    </View>
  )
}

export default HomeScreen
