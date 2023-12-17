import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'


const CategoryItem = ({category ,setCategorySelected}) => {
  return (
    <Pressable onPress={()=>setCategorySelected(category)}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container:{
    width:"80%",
    marginHorizontal:"10%",
    backgroundColor:colors.color2,
    margin:10,
    padding:10,
    alignItems:"center"

  },
  text:{
    fontFamily:'Font1',
    color:"white"

  }
  


})