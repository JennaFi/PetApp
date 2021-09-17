import React from 'react'
import { Image, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={{ height: '100%' }}>
      <Text>hello</Text>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Ojos_Azules_cat.jpg',
        }}
        style={{ height: 100 }}
      />
    </View>
  )
}

export default HomeScreen
