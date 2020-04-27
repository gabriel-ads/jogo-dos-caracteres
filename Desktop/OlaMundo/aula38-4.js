import React, { useState } from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'

const estilos = {
  caixa: { width: 100, height: 100, padding: 10, margin: 5, },
}

export default FlexNormal = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: "flex-start", }}>
          <View style={{ ...estilos.caixa, backgroundColor: 'red', }}>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems:"center"}}>
          <View style={{ ...estilos.caixa, backgroundColor: 'blue', }}>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: "flex-end", }}>
          <View style={{ ...estilos.caixa, backgroundColor: 'yellow', }}>
          </View>
        </View >
    </SafeAreaView >
  )
}