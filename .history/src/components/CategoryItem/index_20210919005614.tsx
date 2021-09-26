import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

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
    <View style={styles.root}>
      <View>
      <Text style={styles.text}>{item.name}</Text>
      <Image style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      </View>
     
    </View>
  )
}

export default CategoryItem
