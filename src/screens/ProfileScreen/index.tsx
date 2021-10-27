import React from 'react'
import { FlatList, View } from 'react-native'
import user from '../../assets/data/users'
import Favorites from '../../components/Favorites'
import ProfilePic from '../../components/ProfilePic'

const ProfileScreen = () => {
  return (
    <>
      <View>
        <ProfilePic {...user[4]} />
        
        
      </View>
      <View> 
        <FlatList data={user} renderItem={({item}) => <Favorites user={item}/>} />
        
      </View>
      
      
      {/* <View>
        <Text>My Favorites</Text>
      </View>

      <View>
        <Text>My Messages</Text>
      </View>

      <View>
        <Text>My pets</Text>
      </View>
      <View>
        <Text>Add a Pet</Text>
      </View>
      */}
    </>
    
  )
}

export default ProfileScreen
