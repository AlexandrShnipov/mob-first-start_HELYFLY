import { HashRouter } from "react-router-dom";
import s from './App.module.scss';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Description from './components/blocks/description/Description';
import Gallery from './components/blocks/gallery/Gallery';
import About from './components/blocks/about/About';
import Recording from './components/blocks/recording/Recording';
import Venue from './components/blocks/venue/Venue';
import Testimonials from "./components/blocks/testimonials/Testimonials";

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
        <Venue />
        <Testimonials/>
      </div>
    </HashRouter>
  );
}

export default App;
