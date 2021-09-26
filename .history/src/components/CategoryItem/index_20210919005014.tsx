import React from 'react'
import { Image, Text, View } from 'react-native'

interface CategoryItemProps {
  item: {
    id: string,
    name: string,
    image: string
  }
}

const CategoryItem = (props: CategoryItemProps) => {
  const { item } = props

  return (
    <View>
      <Text>{item.name}</Text>
      <Image
        source={{
          uri: item.image,
        }}
      />
    </View>
  )
}

export default CategoryItem
