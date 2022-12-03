import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './utils/PrivateRoute';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <>
    {/* for reference */}
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path = "/" element = {<Home />} exact />
          </Route>
          <Route path = "/login/" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </Router>
    </>
  );
}

export default App;
