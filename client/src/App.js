import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SpaceCenter from './components/SpaceCenter';
import Header from './components/Header';

const client=new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header>
          Space Flight Booking
        </Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={SpaceCenter} />
        </Switch>

      </Router>
    </ApolloProvider>

  );
}

export default App;
