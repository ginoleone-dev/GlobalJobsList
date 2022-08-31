import { Box } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./components/Header";
import { AuthContextProvider, AuthContext } from "./Context/AuthContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import UserLogin from "./Pages/UserLogin";
import CreateListing from "./components/CRUD/CreateListing";
import UserSignIn from "./Pages/UserSignIn";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/login"} />;
  };

  console.log(currentUser);
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signin" element={<UserSignIn />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Main />
                </RequireAuth>
              }
            />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route
              path="/contact"
              element={
                <RequireAuth>
                  <Contact />
                </RequireAuth>
              }
            />
            <Route
              path="/post"
              element={
                <RequireAuth>
                  <CreateListing />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App />}>
//        <Route
//           index
//           element={<RequireAuth><Main /></RequireAuth>} />
//        <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
//        <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
//        <Route path="/login" element={<UserLogin />} />
//     </Route>
//   </Routes>
// </BrowserRouter>

// Oldd version of app
//     return (
//     <Box>
//       <AuthContextProvider>
//       <ResponsiveAppBar />
//       <Outlet />
//       </AuthContextProvider>
//     </Box>
//   );
// }
