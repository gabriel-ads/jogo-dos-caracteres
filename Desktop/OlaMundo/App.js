import React, { useState } from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'

const estilos = {
  caixa: { width: 150, height: 200, padding: 10, margin: 5, },
}

export default FlexNormal = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{flex:1, flexWrap:"wrap"}}>
        <View style={{ ...estilos.caixa, backgroundColor: 'red', }}>
        </View>



        <View style={{ ...estilos.caixa, backgroundColor: 'blue', }}>
        </View>



        <View style={{ ...estilos.caixa, backgroundColor: 'yellow', }}>
        </View>

        <View style={{ ...estilos.caixa, backgroundColor: 'green', }}>
        </View>

        <View style={{ ...estilos.caixa, backgroundColor: 'purple', }}>
        </View>
      </View>

    </SafeAreaView >
  )
}