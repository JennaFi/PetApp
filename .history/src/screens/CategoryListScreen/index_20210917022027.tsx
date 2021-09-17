import React from 'react'
import { Image, Text, View } from 'react-native'
import cats from '../../assets/data/cats'

// interface CategoryListProps {
//   id: string
//   name: string
//   image: string
// }

const CategoryListScreen = () => {
  // const item = props
  return (
    <View>
      <Text>{cats.name}</Text>
      <Image
        source={{
          uri: cats.image,
        }}
      />
    </View>
  )
}

export default CategoryListScreen
