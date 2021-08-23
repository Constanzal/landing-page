import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Jumbotron/>
        <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
