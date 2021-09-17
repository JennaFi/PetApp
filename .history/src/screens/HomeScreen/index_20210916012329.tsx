import React from 'react'
import { Image, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={{ height: '100%' }}>
      <Text>hello</Text>
      <Image
        source={{
          uri: 'https://www.google.com/imgres?imgurl=https://upload.wikimedia.org/wikipedia/commons/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg&imgrefurl=https://es.m.wikipedia.org/wiki/Archivo:Tabby_cat_with_blue_eyes-3336579.jpg&tbnid=JUQzojceH_k_AM&vet=1&docid=l-d7Nqn8Kddt-M&w=2877&h=3456&source=sh/x/im#imgrc=JUQzojceH_k_AM&imgdii=S_w4KclU7zpUuM',
        }}
        style={{ height: 100 }}
      />
    </View>
  )
}

export default HomeScreen
