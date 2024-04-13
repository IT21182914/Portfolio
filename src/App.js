import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
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
        <Route
          path="/about"
          element={
            <div>
              <About />
              <Layout />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Contact />
              <Layout />
            </div>
          }
        />{' '}
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
    </>
  );
}

export default App;
