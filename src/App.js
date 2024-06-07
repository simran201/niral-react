import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Shipping from './Components/Shipping';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Services/>
      <Shipping/>
      <Footer/>
    </div>
  );
}

export default App;
