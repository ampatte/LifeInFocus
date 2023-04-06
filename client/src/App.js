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

export default App;
