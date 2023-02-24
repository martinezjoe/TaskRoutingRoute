import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import TaskPage from "./Pages/TaskPage";
import NotFoundPage from "./Pages/404NotFound";
import PrivateRoute from "./router/PrivateRouter";
import NavBar from "./components/NavBar";

// Crear el sistema de enrutado de la aplicación en React:
// Permitir la navegación de Login a Registro y viceversa
// No podremos acceder a Tareas a no ser que nos hayamos logeado primero.

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/task" element = { 
            <PrivateRoute>
              <TaskPage />
            </PrivateRoute>
           } />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
