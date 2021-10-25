import React, { useState } from 'react'
import {
  ImageBackground,
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
  const [likesCount, setLikesCount] = useState(0)

  const onPressLiked = () => {
    setIsLiked(!isLiked)
    const amount = isLiked ? -1 : 1
    setLikesCount(likesCount + amount)
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
                  <AntDesign name="heart" size={28} color="#e31e69" />
                ) : (
                  <AntDesign name="hearto" size={28} color="#e31e69" />
                )}
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.likes}>{likesCount}</Text>

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
                  color="#2b9e59"
                />
              )}
            </TouchableWithoutFeedback>

            <Ionicons name="paper-plane-outline" size={28} color="grey" />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onPressLiked} activeOpacity={0.5}>
        <View>
          <ImageBackground
            style={styles.image}
            source={{
              uri: pet.image,
            }}
          />

          {/* {isLiked ? (
            <AntDesign
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.3,
                top: 120,
                left: 30,
                // bottom: 200,
                // width: 185,
                height: 500,
              }}
              name="heart"
              size={380}
              color="#f27492"
            />
          ) : null} */}
        </View>
      </TouchableOpacity>

      <Text numberOfLines={5}>{pet.description}</Text>
    </View>
  )
}

export default PetCard
