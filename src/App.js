import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Watchlist from './Components/Watchlist';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Movies />
      <Watchlist />
    </>
  );
}

export default App;
