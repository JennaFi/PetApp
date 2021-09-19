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
    <View>
      <View style={styles.root}>
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default CategoryItem
