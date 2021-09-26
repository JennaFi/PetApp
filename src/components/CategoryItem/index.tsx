import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import styles from './styles'

interface CategoryItemProps {
  category: {
    id: string,
    title: string,
    pets: [{ id: string; image: string; name: string }]
  }
}

const CategoryItem = (props: CategoryItemProps) => {
  const { category } = props

  return (
    <>
      <View style={styles.root}>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{category.title}</Text>
          <FlatList
            data={category.pets}
            renderItem={({ item }) => (
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
            )}
            horizontal
          />
        </View>
      </View>
    </>
  )
}

export default CategoryItem
