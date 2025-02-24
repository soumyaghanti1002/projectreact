import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProjectManagement from "./components/ProjectManagement.jsx";
import TaskManagement from "./components/TaskManagement.jsx";
import TodoList from "./components/Todolist.jsx";
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<ProjectManagement />} />
                <Route path="/tasks" element={<TaskManagement />} />
                <Route path="/todolists" element={<TodoList />} />
            </Routes>
        </Router>
    );
}

export default App;


