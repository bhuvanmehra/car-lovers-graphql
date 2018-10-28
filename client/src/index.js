import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import ApolloClient from 'apollo-boost';
//uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql',
//uri: 'http://localhost:3000/graphql',
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

// const networkInterface = createNetworkInterface({
//   uri: '/graphql',
//   opts: {
//     credentials: 'same-origin'
//   }
// });

// const client = new ApolloClient({
//   uri: '/graphql',
//   dataIdFromObject: o => o.id
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.querySelector('#root')
);
