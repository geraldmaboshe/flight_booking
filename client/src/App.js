import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpaceCenter from './components/SpaceCenter';
import Header from './components/Header';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from 'apollo-link-http';
import { AUTH_TOKEN } from '../src/constants';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('AUTH_TOKEN');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: 'Bearer API_KEY'
    }
  };
});

const client = new ApolloClient({
  // uri: 'http://localhost:3000/graphql', //graphql entry point
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header>Space Flight Booking</Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={SpaceCenter} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
