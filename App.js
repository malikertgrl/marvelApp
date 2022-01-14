import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Router from './src/navigation/Router'
import { Provider } from "react-redux"
import { Store } from "./src/redux/Store"


const hash = "c8d77f53230be0cb1d341aae737be02d"
const publicKey = "8344701fa1edef1b10a4feb0ffe0d73f"

// api = http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8344701fa1edef1b10a4feb0ffe0d73f&hash=c8d77f53230be0cb1d341aae737be02d

const App = () => {

  return (
    <Provider store={Store}>
      <Router />

    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
