import React from 'react'
import { Image } from 'react-native'

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
  return (
    <Image style={{height: 700}} 
    source={{ 
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Ojos_Azules_cat.jpg' 
      }} />
    // <View style={styles.root}>
    //   <View style={styles.row}>
    //     {/* <Text>{petItem.category}</Text>
    //     <Text>{petItem.name}</Text> */}
      
    //   </View>
      
    //   {/* <Text>{petItem.age}</Text>
    //   <Text>{petItem.sex}</Text>
    //   <Text>{petItem.description}</Text> */}
    // </View>
  )
}

export default PetCard
