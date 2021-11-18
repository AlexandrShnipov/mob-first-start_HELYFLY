import s from './App.modue.scss';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Description from './components/blocks/description/Description';

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <Main/>
      <Description/>
    </div>
  );
}

export default App;
