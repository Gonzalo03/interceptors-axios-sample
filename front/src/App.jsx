import React, { useEffect, useState } from 'react'
import axios from './utils/axios/axios'


const App = () => {

  const [tokens, settokens] = useState({})

  const getTokens = async () => {

    const response = await axios.get('/get-auth-tokens')

    settokens(response.data)

    localStorage.setItem('tokens', JSON.stringify(await response.data))
    
  }

  useEffect(() => {
    getTokens()
  }, [])
  return (
    <div>
        <h1>Hello, world!</h1>
        <p>This is a sample app to test interceptors</p>
        <p>{JSON.stringify(tokens)}</p>

    </div>

)
}

export default App