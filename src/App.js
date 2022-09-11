import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
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
import WhyRedux from './components/Docs/Redux/WhyRedux';
import Reactjs from './components/Docs/ReactJS/Reactjs';
import GetStarted from './components/Docs/Redux/GetStarted';
import ReduxInstallation from './components/Docs/Redux/ReduxInstallation';
import ReduxDocs from './components/Docs/Redux/ReduxDocs';
import Reduxjs from './components/Docs/Redux/Reduxjs';
import Home from './components/home/Home';
import Footer from './components/shared/Footer';
import Hearder from './components/shared/Hearder';
import NotFound from './components/shared/NotFound';
import Tutorial from './components/Tutorial/Tutorial';
import CoreConcepts from './components/Docs/Redux/CoreConcepts';
import AdminPanel from './components/Dashboard/AdminPanel';
import Dashboard from './components/Dashboard/Dashboard';
import ManageUsers from './components/Dashboard/ManageUsers';
import ManageBlogs from './components/Dashboard/ManageBlogs';
import ManageTutorials from './components/Dashboard/ManageTutorials';
import ManageCourses from './components/Dashboard/ManageCourses';
import AddTutorial from './components/Dashboard/AddTutorial';
import TutorialsManage from './components/Dashboard/TutorialsManage';
import Courses from './components/courses/Courses';
import AddBlogs from './components/Blogs/AddBlogs';
import UserProfile from './components/UserProfile/UserProfile';
// import Navbar from './components/shared/Navbar';
import { ToastContainer } from 'react-toastify';
import Payment from './components/courses/Payment';
import SingleCourseDetails from './components/courses/SingleCourseDetails';
import AskQuestion from './components/AskQuestion/AskQuestion';
import Ask from './components/AskQuestion/Ask';
import Answer from './components/AskQuestion/Answer';
import Navbar from './components/shared/Navbar';
import { createContext, useState } from 'react';
import AddReview from './components/home/AddReview';
import UserProfileAbout from './components/UserProfile/UserProfileAbout';
import UserEditProfile from './components/UserProfile/UserEditProfile';
import MyClass from './components/courses/MyClass';
export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div id={theme}>
        {/* <Hearder></Hearder> */}
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
          <Route path='/addReview' element={<AddReview></AddReview>}></Route>
          <Route path="/ask" element={<Ask></Ask>}></Route>
          <Route path="/askQuestion" element={<AskQuestion></AskQuestion>}></Route>
          <Route path="/answer/:ansId" element={<Answer></Answer>}></Route>
          <Route path='/courses' element={<Courses></Courses>}></Route>
          <Route path='/singleCourseDetails/:courseId' element={<SingleCourseDetails></SingleCourseDetails>}></Route>
          <Route path="/singup" element={<SingUp></SingUp>} />
          <Route path="/contact" element={<ContactUs></ContactUs>} />
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/docs" element={<Docs></Docs>} />
          <Route path="/blog" element={<Blogs></Blogs>} />
          <Route path="/addBlogs" element={<AddBlogs></AddBlogs>} />
          <Route path="/blogDetails/:blogId" element={<BlogDetails />} />
          <Route path="/addBlogs" element={<AddBlogs></AddBlogs>} />
          <Route path="/reactjs" element={<Reactjs></Reactjs>} />
          <Route path="/redux" element={<Reduxjs></Reduxjs>} />
          <Route path="/nextjs" element={<Nextjs></Nextjs>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/myclass" element={<MyClass></MyClass>} />

          <Route path="/payment" element={<Payment></Payment>} />
          <Route path='/reactDashboard' element={<ReactDashboard></ReactDashboard>}>
            <Route index element={<Installation></Installation>}></Route>
            <Route path='mainconcepts' element={<MainConcepts></MainConcepts>}></Route>
          </Route>
          <Route path='next-get-started' element={<NextDocs></NextDocs>}>
            <Route index element={<NextGetStarted></NextGetStarted>}></Route>
            <Route path='next-pages' element={<NextPages></NextPages>}></Route>
            <Route path='getServerSideProps' element={<GetServerSideProps></GetServerSideProps>}></Route>
          </Route>
          <Route path='get-started' element={<ReduxDocs></ReduxDocs>}>
            <Route index element={<GetStarted></GetStarted>}></Route>
            <Route path='installation' element={<ReduxInstallation></ReduxInstallation>}></Route>
            <Route path='why-redux' element={<WhyRedux></WhyRedux>}></Route>
            <Route path='core-concepts' element={<CoreConcepts></CoreConcepts>}></Route>
          </Route>
          <Route path='/user-profile' element={<UserProfile></UserProfile>}>
            <Route index element={<UserProfileAbout></UserProfileAbout>}></Route>
            <Route path='userEditProfile' element={<UserEditProfile></UserEditProfile>}></Route>
          </Route>
          <Route path='admin-panel' element={<AdminPanel></AdminPanel>}>
            <Route index element={<Dashboard></Dashboard>}></Route>
            <Route path='manage-users' element={<ManageUsers></ManageUsers>}></Route>
            <Route path='manage-blogs' element={<ManageBlogs></ManageBlogs>}></Route>
            <Route path='manage-tutorials' element={<ManageTutorials></ManageTutorials>}></Route>
            <Route path='manage-courses' element={<ManageCourses></ManageCourses>}></Route>
            <Route path='add-tutorial' element={<AddTutorial></AddTutorial>}></Route>
            <Route path='tutorials-manage' element={<TutorialsManage></TutorialsManage>}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </div >
    </ThemeContext.Provider>
  );
}

export default App;
