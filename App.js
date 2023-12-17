import { StyleSheet, View } from 'react-native'
import Home from './src/Screens/Home'
import ItemListCategories from './src/Screens/ItemListCategories'
import ItemDetail from './src/Screens/ItemDetail'
import { useState } from 'react'
import { useFonts } from "expo-font"

const  App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  
  const [fontLoaded] = useFonts({
    Font1:require("./assets/Fonts/Tonight-Friend.otf")
  })

  if(!fontLoaded) return null

  
    
  return (
    <View style={styles.container}>
      {categorySelected ?
        <ItemListCategories category = {categorySelected}/>
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
     
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
