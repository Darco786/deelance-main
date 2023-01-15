import 'bootstrap/dist/css/bootstrap.min.css';

import Academy from 'Pages/Academy';
import JobPortal from 'Pages/JobPortal';
import NftMarket from 'Pages/NftMarket';
import Privacy from 'Pages/Privacy';
import Reward from 'Pages/Reward';
import Risk from 'Pages/Risk';
import TeamPage from 'Pages/TeamPage';
import Terms from 'Pages/Terms';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
function App() {
  return (
    < >
        <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/nft-market" element={<NftMarket/>}/>
          <Route exact path="/job-portal" element={<JobPortal/>}/>
          <Route exact path="/academy" element={<Academy/>}/>
          <Route exact path="/team" element={<TeamPage/>}/>
          <Route exact path="/privacy-policy" element={<Privacy/>}/>
          <Route exact path="/terms" element={<Terms/>}/>
          <Route exact path="/risk" element={<Risk/>}/>
          <Route exact path="/rewards" element={<Reward/>}/>
        
        </Routes>
    </Router>
    </>
  );
}

export default App;
