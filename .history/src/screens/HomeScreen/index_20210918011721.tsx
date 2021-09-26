import React from 'react'
import { View } from 'react-native'
import cats from '../../assets/data/cats'
import PetItem from '../../components/PetItem'

const HomeScreen = () => {
  return (
    <View>
      {/* <PetCard /> */}
      <PetItem item={cats[0]}/>
 
    </View>
  )
}

export default HomeScreen
