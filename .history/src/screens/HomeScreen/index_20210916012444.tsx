import React from 'react'
import { Image, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={{ height: '100%' }}>
      <Text>hello</Text>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
        style={{ height: 100 }}
      />
    </View>
  )
}

export default HomeScreen
