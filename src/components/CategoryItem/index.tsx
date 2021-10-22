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
      <Text style={styles.title}>{category.title}</Text>
      <View style={styles.root}>
        
        <View style={styles.rightContainer}>
          
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
