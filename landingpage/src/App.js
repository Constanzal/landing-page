import './App.css';
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
            <Card imagen="https://media.istockphoto.com/photos/dramatic-twilight-cloudscape-sunset-sunrise-picture-id1158514405?k=6&m=1158514405&s=612x612&w=0&h=Kyo1MLQeLP-cmyVB_ucvzVL17-iKapYnlnRdrs9NV-M="/>
            <Card imagen="https://tr-images.condecdn.net/image/LDM0pgM40l1/crop/2040/f/gettyimages-1146431497.jpg"/>
            <Card imagen="https://www.seozoom.co.uk/wp-content/uploads/2021/02/caroselli-immagine.jpg"/>
            <Card imagen="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/01/elefantes-2205783.jpg?itok=Kk1xc3mP"/>
        </div>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
