import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Login from './components/autentication/Login';
import SingUp from './components/autentication/SingUp';
import ContactUs from './components/contactUs/ContactUs';
import Docs from './components/Docs/Docs';
import GetServerSideProps from './components/Docs/NextJS/GetServerSideProps';
import NextDocs from './components/Docs/NextJS/NextDocs';
import NextGetStarted from './components/Docs/NextJS/NextGetStarted';
import Nextjs from './components/Docs/NextJS/Nextjs';
import NextPages from './components/Docs/NextJS/NextPages';
import WhyRedux from './components/Docs/Redux/WhyRedux';
import Reactjs from './components/Docs/ReactJS/Reactjs';
import GetStarted from './components/Docs/Redux/GetStarted';
import Installation from './components/Docs/Redux/Installation';
import ReduxDocs from './components/Docs/Redux/ReduxDocs';
import Reduxjs from './components/Docs/Redux/Reduxjs';
import Home from './components/home/Home';

import Footer from './components/shared/Footer';
import Hearder from './components/shared/Hearder';
import Navbar from './components/shared/Navbar';
import NotFound from './components/shared/NotFound';
import CoreConcepts from './components/Docs/Redux/CoreConcepts';

function App() {
  return (
    <div>
      {/* <Navbar> */}
      <Hearder></Hearder>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/singup" element={<SingUp></SingUp>} />
        <Route path="/contact" element={<ContactUs></ContactUs>} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/docs" element={<Docs></Docs>} />
        <Route path="/reactjs" element={<Reactjs></Reactjs>} />
        <Route path="/redux" element={<Reduxjs></Reduxjs>} />
        <Route path="/nextjs" element={<Nextjs></Nextjs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path='next-get-started' element={<NextDocs></NextDocs>}>
          <Route index element={<NextGetStarted></NextGetStarted>}></Route>
          <Route path='next-pages' element={<NextPages></NextPages>}></Route>
          <Route path='getServerSideProps' element={<GetServerSideProps></GetServerSideProps>}></Route>
        </Route>
        <Route path='get-started' element={<ReduxDocs></ReduxDocs>}>
          <Route index element={<GetStarted></GetStarted>}></Route>
          <Route path='installation' element={<Installation></Installation>}></Route>
          <Route path='why-redux' element={<WhyRedux></WhyRedux>}></Route>
          <Route path='core-concepts' element={<CoreConcepts></CoreConcepts>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      {/* </Navbar> */}

    </div>
  );
}

export default App;
