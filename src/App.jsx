import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    profile: [],
    location: [],
    duration: [],
    stipend: { min: 0, max: 10000 },
    partTime: false,
    withJobOffer: false,
    fastResponse: false,
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearAll = () => {
    setFilters({
      profile: [],
      location: [],
      duration: [],
      stipend: { min: 0, max: 10000 },
      partTime: false,
      withJobOffer: false,
      fastResponse: false,
    });
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        <FilterSidebar 
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
        />
        {/* InternshipList will be added here */}
      </div>
    </>
  );
}

export default App;
