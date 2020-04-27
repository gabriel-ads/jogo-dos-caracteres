import React, { useState } from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'

const estilos = {
  caixa: { width: 100, height:100,padding: 10, margin: 5,},
}

export default FlexNormal = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems:'center', justifyContent:"space-between"}}>
        <View style={{ ...estilos.caixa, backgroundColor: 'red', }}>
        </View>
        <View style={{ ...estilos.caixa, backgroundColor: 'blue',}}>
        </View>
        <View style={{ ...estilos.caixa, backgroundColor: 'yellow',}}>
        </View>
      </View>
    </SafeAreaView>
  )
}