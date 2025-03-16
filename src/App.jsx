import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './components/ProjectCard';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioTable from './components/PortfolioTable';

function App() {
  return (
    <div>
        <PortfolioHeader/>
        <PortfolioTable/>
    </div>
  );
}

export default App
