import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
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

  const navigation = useNavigation()
  const onPetPress = (pet) => {
    navigation.navigate('PetScreen', {id: pet.id})
  }

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <View style={styles.root}>
        <View style={styles.rightContainer}>
          <FlatList
            data={category.pets}
            renderItem={({ item }) => (
              <Pressable onPress={() => onPetPress(item)}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </Pressable>
            )}
            horizontal
          />
        </View>
      </View>
    </>
  )
}

export default CategoryItem
