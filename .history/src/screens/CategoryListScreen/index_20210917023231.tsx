import React from 'react'
import { Image, Text, View } from 'react-native'
import categories from '../../assets/data/categories'

interface CategoryListProps {
  id: {};
  name: {};
  image: {};
}

const CategoryListScreen = ({ name, image }: CategoryListProps) => {
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
