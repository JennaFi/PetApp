import React from 'react'
import { FlatList, View } from 'react-native'
import cats from '../../assets/data/cats'
import PetItem from '../../components/PetItem'

const HomeScreen = () => {
  return (
    <View>
      {/* <PetCard /> */}

      <FlatList
        data={cats}
        renderItem={({ item }) => <PetItem item={item} />}
      />
    </View>
  )
}

export default HomeScreen
