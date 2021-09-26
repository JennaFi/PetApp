import React from 'react'
import { Image, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

interface PetItemProps {
  item: {
    id: string,
    name: string,
    image: string,
    age: number,
    sex: string,
    description?: string
  }
}

const PetItem = (props: PetItemProps) => {
  const { item } = props
  return (
    <View style={styles.page}>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Ojos_Azules_cat.jpg',
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>Tina</Text>
          <View style={styles.iconContainer}>
            <AntDesign name="heart" size={28} color="red" />
            <FontAwesome
              style={styles.icon}
              name="bookmark-o"
              size={28}
              color="grey"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default PetItem
