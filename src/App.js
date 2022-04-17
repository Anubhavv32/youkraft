import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar';

const Home = lazy(() => import('./Components/Main'));
const Country = lazy(() => import('./Components/Country'));
const BrandInfo = lazy(() => import('./Components/BrandInfo'));

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/country/:country" element={<Country />}  />
            <Route path="/brand/:brand" element={<BrandInfo />}  />
            {/* <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} /> */}

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
