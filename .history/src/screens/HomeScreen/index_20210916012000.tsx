import React from 'react'
import { Image, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={{ height: '100%' }}>
      <Text>hello</Text>
      <Image
        source={{ uri: 'https://images.app.goo.gl/2Q6JFcYmS5R758tSA' }}
        style={{ height: '100' }}
      />
    </View>
  )
}

export default HomeScreen