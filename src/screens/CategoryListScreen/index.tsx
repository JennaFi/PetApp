import React from 'react'
import { FlatList, View } from 'react-native'
import categories from '../../assets/data/categories'
import CategoryListItem from '../../components/CategoryListItem'



const CategoryListScreen = () => {
  // const item = props
  return (
    <View>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <CategoryListItem category={item} />}
      />
    </View>
  )
}

export default CategoryListScreen
