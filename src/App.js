import {
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import WelcomeFAQ from './components/WelcomeFAQ';
import Resources from './components/Resources';
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-main">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomeFAQ />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
