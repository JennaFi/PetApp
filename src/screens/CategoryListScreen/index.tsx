import React from 'react'
import { FlatList, View } from 'react-native'
import categories from '../../assets/data/categories'
import CategoryItem from '../../components/CategoryItem'



const CategoryListScreen = () => {
  // const item = props
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem item={item} />}
      />
    </View>
  )
}

export default CategoryListScreen
