import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./global-styles/global.css";
import Homepage from "./pages/Homepage";




import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
// wrap in context, example module 21. in headers have to pass auth token, create login in route to login in user then grab token.
// grab token from user query
// i.e ( pennywise - "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImZpcnN0TmFtZSI6IlBlbm55IiwiZW1haWwiOiJwZW5ueXdpc2VAZ21haWwuY29tIiwiX2lkIjoiNjQzNGM4ZDc0Y2MxZDk3OGQ4MDBmYjkzIn0sImlhdCI6MTY4MTE4MDg4OCwiZXhwIjoxNjgxMTg4MDg4fQ.x5ripvHtT263JRn2ssd5JxiQvHNHZXi48dVogxWGmWw" )

export default App;
