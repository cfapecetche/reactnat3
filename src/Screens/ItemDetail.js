import { StyleSheet, Text, View } from 'react-native'

const ItemDetail = () => {
  return (
    <View styles={styles.container}>
      <Text>ItemDetail</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"


   }  

})