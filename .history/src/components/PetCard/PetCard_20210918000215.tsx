import React, { useState } from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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
  const [isLiked, setIsLiked] = useState(false)
  const [addToFav, setAddtoFav] = useState(false)

  const onPressLiked = () => {
    setIsLiked(!isLiked)
  }
  const onPressAdded = () => {
    setAddtoFav(!addToFav)
  }

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text>{pet.category}</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>{pet.name}</Text>
          <View style={styles.leftContainer}>
            <View style={styles.icon}>
              <TouchableWithoutFeedback onPress={onPressLiked}>
                {isLiked ? (
                  <AntDesign name="heart" size={28} color="red" />
                ) : (
                  <AntDesign name="hearto" size={28} color="red" />
                )}
              </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback onPress={onPressAdded}>
              {addToFav ? (
                <FontAwesome
                  style={styles.icon}
                  name="bookmark-o"
                  size={28}
                  color="grey"
                />
              ) : (
                <FontAwesome
                  style={styles.icon}
                  name="bookmark"
                  size={28}
                  color="black"
                />
              )}
            </TouchableWithoutFeedback>

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

      <Text numberOfLines={3}>{pet.description}</Text>
    </View>
  )
}

export default PetCard
