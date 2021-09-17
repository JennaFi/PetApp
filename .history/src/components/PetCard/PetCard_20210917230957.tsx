import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
        <Text>{pet.category}</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>{pet.name}</Text>
          <View style={styles.leftContainer}>
            <View style={styles.icon}>
              <AntDesign name="heart" size={28} color="red" />
            </View>

            <Ionicons name="paper-plane-outline" size={28} color="grey" />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: pet.image,
          }}
        />
      </TouchableOpacity>

      <Text>{pet.description}</Text>
    </View>
  )
}

export default PetCard
