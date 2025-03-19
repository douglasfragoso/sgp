import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<></>} />
        <Route path="/user" element={<></>} />
        <Route path="/projects" element={<></>} />
        <Route path="/tasks" element={<></>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;