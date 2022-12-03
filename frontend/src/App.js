
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    {/* for reference */}
    {/* <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path = "/" element = {<Home />} exact />
          </Route>
          <Route path = "/login/" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </Router> */}
    </>
  );
}

export default App;
