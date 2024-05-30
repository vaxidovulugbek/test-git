import './App.css';
import Advantages from './components/Advantages/Advantages';
import Catalog from './components/Catalog/Catalog';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Reviews from './components/Reviews/Reviews';
import Text from './components/Text/Text';
import Ont from './components/Ont/Ont';
import Write from './components/Write/Write';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Catalog />
      <Info />
      <Reviews />
      <Gallery />
      <Advantages />
      <Text />
      <Ont />
      <Write />
      <Footer />
    </div>
  );
}

export default App;
