import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

interface ProfilePicProps {
  user: {
    id: string,
    imageUri: string,
    name: string,
    favs: [{ image: string; name: string }]
  }
}

const ProfilePic = (props: ProfilePicProps) => {
  const { user } = props
  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />
        <Text style={styles.text}>{user.name}</Text>
      </View>

      
    </View>
  
  )
}

export default ProfilePic
