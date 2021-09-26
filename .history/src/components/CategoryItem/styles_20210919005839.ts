import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
  
  page: {
    padding: 10
  
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
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  name: {
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: 'row',
     
      
  },
  icon: {
    padding: 5
  }
    
})
  
  
export default styles