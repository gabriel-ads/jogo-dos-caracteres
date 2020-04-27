import React, { useState } from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'

const estilos = {
  caixa: {height:90, padding: 10, margin: 4, },
}

export default FlexNormal = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex:1}}>
      
        <View style={{ ...estilos.caixa, backgroundColor: 'red', }}>
        </View>
      
        <View style={{ ...estilos.caixa, backgroundColor: 'blue', }}>
        </View>
      
      
        <View style={{ ...estilos.caixa, backgroundColor: 'yellow', }}>
        </View>
        <View style={{ ...estilos.caixa, backgroundColor: 'red', }}>
        </View>
      
        <View style={{ ...estilos.caixa, backgroundColor: 'blue', }}>
        </View>
      
      
        <View style={{ ...estilos.caixa, backgroundColor: 'yellow', }}>
        </View>
      
      </View>
    </SafeAreaView >
  )
}