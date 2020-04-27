import React, { useState } from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'

const estilos = {
  caixa: { width: 100, height: 100, padding: 10, margin: 5, },
}

export default FlexNormal = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end" }}>
        <View style={{ ...estilos.caixa, backgroundColor: 'red', }}>
        </View>
        <View style={{ ...estilos.caixa, backgroundColor: 'blue', flex:1}}>
        </View>
      </View>
    </SafeAreaView >
  )
}