import './App.css';
import Custom from './components/Custom';
import Footer from './components/Footer';
import Last from './components/Last';
import Navbar from './components/Navbar';
import Third from './components/Third';
import Loading from './components/Loading';
import './index.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Sales from './components/Sales';
import Connect from './components/Connect';
import Tshirt from './components/Tshirt';

import Waterplant from './components/Waterplant';
import Shop from './components/Shop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading /> 
      ) : (
        <div> 
          <Navbar />
          <Tshirt/>
          <Third />
          <Shop/>
          <Custom />
          <Connect/>
          <Sales/>
          <Card/>
          <Waterplant/>
          <Last />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
