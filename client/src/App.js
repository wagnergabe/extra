import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//components
import Home from "./pages/Home";
import Nav from "./components/Nav";
import PostList from "./pages/PostList";
import PostForm from "./components/PostForm/PostForm";
import TripForm from './components/TripForm';
import TripInfo from './components/TripInfo';
import Footer from "./components/footer";
import FlightSearchPage from "./pages/FlightSearchPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<PostList />} />
              <Route path="/form" element={<PostForm />} />
              <Route path='/tripform' element={<TripForm />} />
              <Route path="/FlightSearchPage" element={<FlightSearchPage />} />
              <Route path='/tripinfo' element={<TripInfo />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
