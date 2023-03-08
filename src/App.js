import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import HomePage from './pages/homePage.js'
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />

    </div>
  );
}

export default App;
