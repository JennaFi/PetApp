import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'

  },
  root: {
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain', 
  },
  rightContainer: {
    padding: 10,  
    flex: 3,
  },
  name: {
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 5
  }
  
})


export default styles