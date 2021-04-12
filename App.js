import React from 'react'
import { Text, View, ActivityIndicator, Button } from 'react-native'

const App = () => {
  const onBtnPress = () => {
    console.log(`${new Date().toLocaleTimeString()} button press`)
  }
  return (
    <View style={{ padding: 100 }}>
      <ActivityIndicator siz='large' color='#61DBFB' />
      <Text>Hello World</Text>
      <Button title='Withdraw Ideas' onPress={onBtnPress} />
    </View>
  )
}

export default App