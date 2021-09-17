import React from 'react'
import { Image, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://images.app.goo.gl/2Q6JFcYmS5R758tSA' }}
        style={{ height: '100%' }}
      />
    </View>
  )
}

export default HomeScreen
