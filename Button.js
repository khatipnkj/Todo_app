import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const Button = ({title,hndlebtn, Color}) => {
  return (
    <View>
      <TouchableOpacity style={{alignItems: "center", backgroundColor:Color, padding: 10, }} onPress={hndlebtn}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

