
import './App.css'
import ProjectCard from './components/ProjectCard';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioTable from './components/PortfolioTable';

function App() {
  return (
    <div className="main-content">
    <PortfolioHeader className="h-[var(--header-height)]"/> {/* Фиксируем высоту хедера */}
    <PortfolioTable className="flex-1"/> {/* Основное содержимое */}
  </div>
  );
}

export default App
