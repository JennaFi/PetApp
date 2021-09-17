import React from 'react'
import { Image, View } from 'react-native'
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
        {/* <Text>{petItem.category}</Text>
        <Text>{petItem.name}</Text> */}
      </View>
      <Image style={{height: 700}} source={{ uri: pet.image }} />
      {/* <Text>{petItem.age}</Text>
      <Text>{petItem.sex}</Text>
      <Text>{petItem.description}</Text> */}
    </View>
  )
}

export default PetCard
