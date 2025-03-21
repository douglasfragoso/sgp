import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import User from "../pages/User";
import UserForm from "../pages/User/UserForm";
import Projects from "../pages/Projects";
import ProjectForm from "../pages/Projects/ProjectForm";
import Tasks from "../pages/Tasks";
import TaskForm from "../pages/Tasks/TaskForm";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/user" element={<User /> } />
        <Route path="/user/:id" element={<></> } />
        <Route path="/newuser" element={<UserForm /> } />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:id" element={<ProjectForm/>} />
        <Route path="/newproject" element={<ProjectForm/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/tasks/:id" element={<TaskForm/>} />
        <Route path="/newtask" element={<TaskForm/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;