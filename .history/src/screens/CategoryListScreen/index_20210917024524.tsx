import React from 'react'
import { Image, Text, View } from 'react-native'

interface CategoryListProps {
  categories: {
    id: {};
    name: {};
    image: {};
  }

}

const CategoryListScreen = ({ categories }: CategoryListProps) => {
  // const item = props
  return (
    <View>
      <Text>Hola</Text>
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
