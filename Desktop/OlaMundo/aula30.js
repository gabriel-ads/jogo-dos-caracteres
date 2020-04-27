import React, { useState } from 'react'
import {SafeAreaView, Text, Button} from 'react-native'



export default function Votos(){
  const [contaVoto, setVoto] = useState(0)
  return(
    <SafeAreaView>
      <Text>Meu numero de votos é {contaVoto}</Text>
      <Button      
        onPress={()=>{
          setVoto(contaVoto + 1)
        }}
        title = "Contar voto"
      />
    </SafeAreaView>
  );
}