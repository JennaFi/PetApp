import React from 'react'
import { FlatList, View } from 'react-native'
import categories from '../../assets/data/categories'
import CategoryItem from '../../components/CategoryItem'

const HomeScreen = () => {
  return (
    <View>
      {/* <PetCard /> */}

      <FlatList
        data={categories.items}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  )
}

export default HomeScreen
