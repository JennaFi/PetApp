import React from 'react'
import { Image, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import pet from '../../assets/data/pet'
import styles from './styles'

// interface PetCardProps {
//   petItem: {
//     id: string,
//     category: string,
//     image: string,
//     name: string,
//     age: number,
//     sex: string,
//     description: string,
//   }
// }

const PetCard = () => {
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text>Category</Text>

        <Text style={styles.text}>{pet.name}</Text>

        <AntDesign name="heart" size={24} color="red" />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: pet.image,
        }}
      />
    </View>
  )
}

export default PetCard
