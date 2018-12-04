import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import GiftList from "./components/GiftList";

import Home from "./components/Home";

// apollo  client setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Home />
          <GiftList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
