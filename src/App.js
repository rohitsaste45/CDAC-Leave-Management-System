import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import AboutUS from "./components/AboutUs";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import NewNavbar from "./components/Navbar";

import Contact from "./components/ContactUs";

import Home from "./components/Homepage";
import CandidateLogin from "./components/CandidateLogin";
import FacultyLogin from "./components/FacultyLogin";
import CandidateForgotPassword from "./components/CandidateForgotPassword";
import FacultyForgetPass from "./components/FacultyForgetPass";

import StudentRegistration1 from "./components/StudentRegistration1";
import Facultyreg from "./components/Facultyreg";

import MyTodo from "./components/AddLeave";
import MyTodoList from "./components/GetAleaves";
import InNavbar from "./components/InNavbar";
import MyUserList from "./components/UserList";
import InNavbar2 from "./components/InNavbar2";
import Applicationlist from "./components/ApplicationList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/studentlogin" element={<CandidateLogin />} />
          <Route path="/facultylogin" element={<FacultyLogin />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/candfor" element={<CandidateForgotPassword />} />
          <Route path="/falfor" element={<FacultyForgetPass />} />
          <Route path="/stdreg" element={<StudentRegistration1 />} />
          <Route path="/falreg" element={<Facultyreg />} />

          <Route
            path="/newnav"
            element={
              <ProtectedRouteCan>
                <InNavbar />
              </ProtectedRouteCan>
            }
          />
          <Route
            path="/mytodo"
            element={
              <ProtectedRouteCan>
                <MyTodo />
              </ProtectedRouteCan>
            }
          />
          <Route
            path="/mytodolist"
            element={
              <ProtectedRouteCan>
                <MyTodoList />
              </ProtectedRouteCan>
            }
          />
          <Route
            path="/facnavbar"
            element={
              <ProtectedRoutefac>
                <InNavbar2 />
              </ProtectedRoutefac>
            }
          />
          <Route
            path="/userlist"
            element={
              <ProtectedRoutefac>
                <MyUserList />
              </ProtectedRoutefac>
            }
          />
          <Route
            path="/applist"
            element={
              <ProtectedRoutefac>
                <Applicationlist />
              </ProtectedRoutefac>
            }
          />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function ProtectedRouteCan({ children }) {
  let loginStatus = localStorage.getItem("loginStatuscan");
  if (!loginStatus) {
    return <Navigate to={"/home"} replace={true} />;
  }

  return children;
}
function ProtectedRoutefac({ children }) {
  let loginStatus = localStorage.getItem("loginStatusfac");
  if (!loginStatus) {
    return <Navigate to={"/home"} replace={true} />;
  }

  return children;
}

export default App;
