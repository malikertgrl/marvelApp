import React from 'react'
import { StatusBar } from 'react-native'
import Router from './src/navigation/Router'
import { Provider } from "react-redux"
import { Store } from "./src/redux/Store"
import { Colors } from "./src/constants"



const App = () => {

  return (
    <Provider store={Store}>
      <StatusBar backgroundColor={Colors.backgroundColor} />
      <Router />

    </Provider>
  )
}

export default App


