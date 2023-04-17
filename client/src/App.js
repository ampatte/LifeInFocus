//import from react
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import style
import "./global-styles/global.css";
import "./App.css";

//import components
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import Loginpage from "./pages/Loginpage";
import Signup from "./pages/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//import from apollo
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql"
});

const authLink = setContext((_, { headers}) => {
  const token = localStorage.getItem('app_id_token');
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" id="home">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>  
  );
}
// wrap in context, example module 21. in headers have to pass auth token, create login in route to login in user then grab token.
// grab token from user query

export default App;
