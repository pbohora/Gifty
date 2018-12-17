import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GiftList from "./components/GiftList";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// apollo  client setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
