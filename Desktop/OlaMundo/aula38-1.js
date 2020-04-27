import React, { useState } from 'react'
import {SafeAreaView, Text, Button, View} from 'react-native'

const Caixa = ({cor, flex}) => {
  return(
    <View
    style={{
      width:100,
      height:100,
      backgroundColor:cor,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      flex: flex,
    }}
    />
  )
}

const App = () => {
  return(
    <SafeAreaView>
      <View
        style={{
         flexDirection: "row",
         flex: 1,
         justifyContent: "center",
         alignItems: 'center',
        }}
      />
      <Caixa cor='red'/>
      <Caixa cor='blue'/>
      <Caixa cor='yellow'/>
      

    </SafeAreaView>
  )
}

export default App;