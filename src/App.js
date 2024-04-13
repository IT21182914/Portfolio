import logo from './logo.svg';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Layout />
              </div>
            }
          />{' '}
          <Route />
          <Route
            path="/about"
            element={
              <div>
                <About />
                <Layout />
              </div>
            }
          />
          <Route />
          <Route
            path="/contact"
            element={
              <div>
                <Contact />
                <Layout />
              </div>
            }
          />{' '}
          <Route />
          <Route
            path="/portfolio"
            element={
              <div>
                <Portfolio />
                <Layout />
              </div>
            }
          />{' '}
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
