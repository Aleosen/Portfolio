
import './App.css'
import ProjectCard from './components/ProjectCard';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioTable from './components/PortfolioTable';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import navbars from './data/navbars.json'

function App() {
  return (
    <Router>
    <div>
    <NavBar/>
    <Routes>
          <Route path={navbars['Main'].address} element={<PortfolioHeader />} />
          {/* <Route path={navbars['About me'].address} element={<About />} /> */}
          <Route path={navbars['Projects'].address} element={<PortfolioTable />} />
          {/* <Route path={navbars['Contacts'].address} element={<Contact />} /> */}
    </Routes>
    </div>
    </Router>
  );
}

export default App
