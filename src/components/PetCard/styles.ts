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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
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
    // flex: 1,
    resizeMode: 'cover',
    height: 500,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    marginVertical: 20,
    borderWidth: 1,
    
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    
  },
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
 
  

})
export default styles