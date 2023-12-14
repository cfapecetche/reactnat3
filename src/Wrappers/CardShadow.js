import { StyleSheet, Text, View } from 'react-native'


const CardShadow = ({children, style}) => {
  return (
    <View style={{...styles.container,...style}}>
      {children}
    </View>
  )
}

export default CardShadow

const styles = StyleSheet.create({
  container:{
    elevation:10
  }


})