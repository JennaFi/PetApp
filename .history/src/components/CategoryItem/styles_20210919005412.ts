import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
  root: {
    flex: 1,
   
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginHorizontal: 15
    

  },
 
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 15,
    marginRight: 20,
    
    justifyContent: 'space-between'
  },
  icon: {
    marginRight: 5
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
    fontSize: 22,
    fontWeight: 'bold',
    
  }
})
export default styles