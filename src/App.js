import Routing from "./Routing";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
      <Header/>
      <Routing/>
      <Footer/>
    </Router>
  );
}

export default App;
