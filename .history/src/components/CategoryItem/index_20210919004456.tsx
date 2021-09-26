import React from 'react'
import { Image, Text, View } from 'react-native'

interface CategoryItemProps {
  category: {
    id: string,
    name: string,
    image: string
  }
}

const CategoryItem = (props: CategoryItemProps) => {
  const { category } = props

  return (
    <View>
      <Text>{category.name}</Text>
      <Image
        source={{
          uri: category.image,
        }}
      />
    </View>
  )
}

export default CategoryItem
