import './App.css';

//Componentes
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  sessionStorage.setItem('user', 'José');

  let user = sessionStorage.getItem('user'); 

  return (
    <>
      <Header user={user}/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
