import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './App.jsx'

const client = new ApolloClient({
  uri: 'https://petgram-server-cjp.calaojuanpablo.now.sh/graphql'
})

const RenderApp = ({ client }) => (
  <ApolloProvider client={client}>
    <App />,
  </ApolloProvider>
)

ReactDOM.render(<RenderApp client={client} />, document.getElementById('app'))
