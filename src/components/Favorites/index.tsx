import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import styles from './styles'

interface FavoritesProps {
  user: {
    id: string,
    imageUri: string,
    name: string,
    favs: [{ image: string; name: string }]
  }
}

const Favorites = (props: FavoritesProps) => {
  
  const { user } = props
  console.warn(user.favs)

  return (
    <View>
      <View style={{height: '100%'}}>
        <Text style={styles.text}>My Favorites</Text>
        
        <FlatList
          data={user.favs}
          renderItem={({ item }) => (
            <Image
              style={styles.imageFav}
              source={{
                uri: item.image,
              }}
            />
            
          )} horizontal />
        <Text>{user.favs.name}</Text> 
      </View>
      
    </View>
  )
  
}

export default Favorites
