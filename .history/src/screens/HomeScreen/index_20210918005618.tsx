import React from 'react'
import { View } from 'react-native'
import PetItem from '../../components/PetItem'

const HomeScreen = () => {
  return (
    <View>
      {/* <PetCard /> */}
      <PetItem />
      <PetItem />
      <PetItem />
      <PetItem />
      <PetItem />
    </View>
  )
}

export default HomeScreen
