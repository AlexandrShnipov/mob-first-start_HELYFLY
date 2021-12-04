import { HashRouter } from "react-router-dom";
import s from './App.module.scss';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Description from './components/blocks/description/Description';
import Gallery from './components/blocks/gallery/Gallery';
import About from './components/blocks/about/About';
import Recording from './components/blocks/recording/Recording';
import Map from './components/blocks/map/Map';

function App() {
  return (

    <HashRouter>
      <div className={s.App}>
        <Header />
        <Main />
        <Description />
        <Gallery />
        <About />
        <Recording />
        <Map/>
      </div>
    </HashRouter>
  );
}

export default App;
