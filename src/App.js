import './App.css';
import Banner from './components/Pages/Home/Banner';
import BuildDoc from './components/Pages/Home/BuildDoc';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar>
        <Banner></Banner>
        <BuildDoc></BuildDoc>
      </Navbar>
    </div>
  );
}

export default App;
