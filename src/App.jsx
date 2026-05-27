import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import InternshipList from './components/InternshipList/InternshipList';
import { useInternships } from './hooks/useInternships';
import './App.css';

function App() {
  const { internships, isLoading, error } = useInternships();
  
  const [filters, setFilters] = useState({
    profileSearch: '',
    locationSearch: '',
    profile: [],
    location: [],
    duration: [],
    stipend: { min: 0, max: 10000 },
    partTime: false,
    withJobOffer: false,
    fastResponse: false,
    earlyApplicant: false,
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearAll = () => {
    setFilters({
      profileSearch: '',
      locationSearch: '',
      profile: [],
      location: [],
      duration: [],
      stipend: { min: 0, max: 10000 },
      partTime: false,
      withJobOffer: false,
      fastResponse: false,
      earlyApplicant: false,
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
          internships={internships}
        />
        <InternshipList 
          internships={internships}
          filters={filters}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </>
  );
}

export default App;
