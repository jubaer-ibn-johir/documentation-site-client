import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/autentication/Login';
import SingUp from './components/autentication/SingUp';
import BlogDetails from './components/Blogs/BlogDetails';
import Blogs from './components/Blogs/Blogs';
import ContactUs from './components/contactUs/ContactUs';
import Docs from './components/Docs/Docs';
import GetServerSideProps from './components/Docs/NextJS/GetServerSideProps';
import NextDocs from './components/Docs/NextJS/NextDocs';
import NextGetStarted from './components/Docs/NextJS/NextGetStarted';
import Nextjs from './components/Docs/NextJS/Nextjs';
import Installation from './components/Docs/ReactJS/Installation';
import MainConcepts from './components/Docs/ReactJS/MainConcepts';
import ReactDashboard from './components/Docs/ReactJS/ReactDashboard';
import NextPages from './components/Docs/NextJS/NextPages';
import Reactjs from './components/Docs/ReactJS/Reactjs';
import Reduxjs from './components/Docs/Redux/Reduxjs';
import Home from './components/home/Home';

import Footer from './components/shared/Footer';
import Hearder from './components/shared/Hearder';
import NotFound from './components/shared/NotFound';

function App() {
  return (
    <div>
      {/* <Navbar> */}
      <Hearder></Hearder>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        
        <Route path="/singup" element={<SingUp></SingUp>} />
        <Route path="/contact" element={<ContactUs></ContactUs>} />
        <Route path="/docs" element={<Docs></Docs>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="/blogDetail/:blogDetailId" element={<BlogDetails />} />
        <Route path="/reactjs" element={<Reactjs></Reactjs>} />
        <Route path="/redux" element={<Reduxjs></Reduxjs>} />
        <Route path="/nextjs" element={<Nextjs></Nextjs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path='/reactDashboard' element={<ReactDashboard></ReactDashboard>}>
          <Route index element={<Installation></Installation>}></Route>
          <Route path='mainconcepts' element={<MainConcepts></MainConcepts>}></Route>
        </Route>
        <Route path='next-get-started' element={<NextDocs></NextDocs>}>
          <Route index element={<NextGetStarted></NextGetStarted>}></Route>
          <Route path='next-pages' element={<NextPages></NextPages>}></Route>
          <Route path='getServerSideProps' element={<GetServerSideProps></GetServerSideProps>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      {/* </Navbar> */}

    </div >
  );
}

export default App;
