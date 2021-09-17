import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
  root: {
    flex: 1,
   
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 15
    

  },
  headerContainer: {

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 600,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    marginVertical: 20,
    borderWidth: 1,
    
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
export default styles