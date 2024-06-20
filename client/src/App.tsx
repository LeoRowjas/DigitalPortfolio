import {
   BrowserRouter as Router,
   Routes,
   Route,
   Outlet,
} from "react-router-dom";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";
import AllProjects from "./pages/AllProjects";
import ProfileProjects from "./pages/ProfileProjects";

function App() {
   return (
      <Router>
         <Routes>
            <Route
               index
               element={
                  <>
                     <Header /> <Main />
                  </>
               }
            />
            <Route
               path="/feed"
               element={
                  <>
                     <Header />
                     <Feed />
                  </>
               }
            />
            <Route
               path="/projects"
               element={
                  <>
                     <Header />
                     <AllProjects />
                  </>
               }
            />
            <Route
               path="/profile-projects"
               element={
                  <>
                     <Header />
                     <ProfileProjects />
                  </>
               }
            />
            <Route
               path="/profile"
               element={
                  <>
                     <Header />
                     <Profile />
                  </>
               }
            />

            {/* Routes without Header and Footer */}
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
