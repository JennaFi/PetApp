import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

interface PetCardProps {
  petItem: {
    id: string
    category: string,
    image: string,
    name: string,
    age: number,
    sex: string,
    description: string,
  }
}

const PetCard = ({ petItem }: PetCardProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text>{petItem.category}</Text>
        <Text>{petItem.name}</Text>
      </View>
      <Image style={styles.image} source={{ uri: petItem.image }} />
      <Text>{petItem.age}</Text>
      <Text>{petItem.sex}</Text>
      <Text>{petItem.description}</Text>
    </View>
  )
}

export default PetCard
