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
    marginHorizontal: 10,
    margin: 5,
    justifyContent: 'center'
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