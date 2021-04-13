import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MapView from 'react-native-maps'

/* latitude: -23.5492243,
longitude: -46.5813785,

latitudeDelta: 0.0922,
longitudeDelta: 0.04,

Latitude: -15.7797200

Longitude: -47.9297200


Latitude: -23.413, 

Longitude: -46.4445


  */


export default function App() {
  const [change, setChange] = useState(null)


  const [number, setNumber] = useState([
    { valor: 0 },
    { valor1: 0 },

  ])

  // essa função permite navegar e ao soltar vai direcionar para local
  //selecionado

  function changeLocation(event, gesture) {

    if (gesture === false) {
      return;

    } else {

      setChange({
        latitude: event.latitude,
        longitude: event.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.04,
      })
      setNumber({
        valor: event.latitude,
        valor1: event.longitude,
      })

    }




  }



  function pressLocation(event) {
    setChange({

      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.04,

    })

    setNumber({
      valor: event.nativeEvent.coordinate.latitude,
      valor1: event.nativeEvent.coordinate.longitude
    })



  }



  function moveCitySp(lat, lon) {
    // se eu colocar simbolo igual no valor que esta retornando, ao inves de : 
    //vai acontecer que latitude  vai ser igual ao valor que coloquei é 
    //não uma propriedade. Exemplo latitutde:lat -- estou dizendo que latitute
    // tem esse valor, agora latitude = lat--- estou dizendo que latitude 
    //virou lat .

    setChange({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.04,

    })

    setNumber({
      valor: lat,
      valor1: lon
    })

  }

  function moveCityDf(lat, lon) {
    setChange({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.04,

    })
    setNumber({
      valor: lat,
      valor1: lon
    })

  }




  function moveCityGc(lat, lon) {

    setChange({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.04,

    })

    setNumber({
      valor: lat,
      valor1: lon
    })

  }

  return (
    <SafeAreaView style={styles.container} >


      <MapView
        onMapReady={() => alert("Mapa totalmente  carregado")}
        onRegionChangeComplete={changeLocation}
        onPress={pressLocation}
        style={styles.map}
        region={change}

      />

      <View style={styles.btnArea} >

        <TouchableOpacity onPress={() => moveCitySp(-23.5492243, -46.5813785)} style={styles.button}>

          <Text style={{ color: '#fff', textAlign: 'center' }}  > São paulo </Text>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => moveCityGc(-23.413, -46.4445)} style={styles.button}>

          <Text style={{ color: '#fff', textAlign: 'center' }}  > Guarulhos </Text>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => moveCityDf(-15.7797200, -47.9297200)} style={styles.button}>

          <Text style={{ color: '#fff', textAlign: 'center' }}  > Brazilia </Text>

        </TouchableOpacity>

      </View>


      <Text style={{ marginTop: 30, fontSize: 20 }}>

        {number.valor && `Latitude atual: ${number.valor} \n Longitude atual: ${number.valor1} `}
      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 400,

  },
  btnArea: {

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,

  },
  button: {
    margin: 20,
    backgroundColor: "#125",
    width: 100,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

  }



});

