import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
  root: {
    flexDirection: 'row',
    marginVertical: 2,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    flex: 2,
    height: 100,
    resizeMode: 'contain', 
    borderRadius: 10,
  },
  rightContainer: {
    padding: 10,  
    flex: 3,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  
 
})
  
  
export default styles