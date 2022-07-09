import {
  Routes,
  Route,
} from 'react-router-dom';

// import ComingSoon from './components/ComingSoon';
import Header from './components/Header';
import Home from './components/Home';
import WelcomeFAQ from './components/WelcomeFAQ';
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-main">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomeFAQ />} />
        <Route
          path="/resources"
          element={
            <h1 className="text-4xl text-center font-bold m-8">Resources</h1>
          }
        />
        {/* <ComingSoon /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
