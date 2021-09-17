import React from 'react'
import { Image, Text, View } from 'react-native'
import categories from '../../assets/data/categories'

const CategoryListScreen = () => {
  return (
    <View>
      <Text>{categories.name}</Text>
      <Image
        source={{
          uri: categories.image,
        }}
      />
    </View>
  )
}

export default CategoryListScreen
