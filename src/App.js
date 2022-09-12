import { Box } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import UserLogin from "./Pages/UserLogin";
import CreateListing from "./components/CRUD/CreateListing";
import UserSignIn from "./Pages/UserSignIn";
import ProtectedRoute from "./Context/ProtectedRoute";

function App() {
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
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/post"
              element={
                <ProtectedRoute>
                  <CreateListing />
                </ProtectedRoute>
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
