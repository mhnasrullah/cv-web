import React from 'react'
import { Provider } from 'react-redux'
import Testing from '../components/Testing'
import Store from '../app/Store'

export default function counter() {

  return (
    <Provider store={Store}>
        <Testing/>
    </Provider>
  )
}
