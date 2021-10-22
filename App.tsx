/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import { SafeAreaView, useColorScheme, View } from 'react-native'
import 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Navigation from './src/navigation'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {/* <HomeScreen /> */}
        {/* <CategoryListScreen/> */}
        <Navigation />
      </View>
    </SafeAreaView>
  )
}

export default App
