import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

interface CategoryListItemProps {
  category: {
    id: string,
    title: string,
    poster: string
  }
}

const CategoryListItem = (props: CategoryListItemProps) => {
  const { category } = props

  return (
    <>
      <View style={styles.root}>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{category.title}</Text>
          <Image
            style={styles.image}
            source={{
              uri: category.poster
            }}
          />
         
        </View>
      </View>
    </>
  )
}

export default CategoryListItem
