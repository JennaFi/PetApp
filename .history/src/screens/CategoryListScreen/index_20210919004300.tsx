import React from 'react'
import { FlatList, View } from 'react-native'
import categories from '../../assets/data/categories'
import CategoryItem from '../../components/CategoryItem'

// interface CategoryListProps {
//   categories: {
//     id: {};
//     name: {};
//     image: {};
//   }

// }

const CategoryListScreen = () => {
  // const item = props
  return (
    <View>
     <FlatList data={categories} renderItem={({category}) => <CategoryItem category={category}/>} />
    </View>
  )
}

export default CategoryListScreen
