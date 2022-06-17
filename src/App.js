import {
  Routes,
  Route,
} from 'react-router-dom';

import ComingSoon from './components/ComingSoon';
import Header from './components/Header';
import WelcomeFAQ from './components/WelcomeFAQ';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/welcome" element={<WelcomeFAQ />} />
        <Route path="/resources" element={"Resources"} />
        {/* <ComingSoon /> */}
      </Routes>
    </div>
  );
}

export default App;
