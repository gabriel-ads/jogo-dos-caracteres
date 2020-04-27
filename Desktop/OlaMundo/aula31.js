import React, { useState } from 'react'
import { Text, TextInput, Button, SafeAreaView } from 'react-native'

class Votos extends React.Component{
  constructor(){
    super();
    this.state = {
      votos: 0
    }
  }

  render(){
    return(
      <SafeAreaView>
        <Text>Numero de Votos: {this.state.votos}</Text>
        <Button
        title= 'Somar votos'
          onPress={()=> this.setState({votos: this.state.votos +1})}
          />
      </SafeAreaView>
    )
  }
}


export default Votos;