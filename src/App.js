import Routing from "./Routing";
import Footer from "./Common/footer/Footer";
import Header from "./Components/header/Header";
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
