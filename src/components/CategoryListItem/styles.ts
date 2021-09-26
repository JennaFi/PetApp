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
    height: 100,
    width: '50%',
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5
  },
  rightContainer: {
    padding: 10,  
    flex: 3,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  
 
})
  
  
export default styles