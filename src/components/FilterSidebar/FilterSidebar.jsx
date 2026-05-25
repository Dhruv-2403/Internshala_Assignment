import { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, onFilterChange, onClearAll }) => {
  const [expandedSections, setExpandedSections] = useState({
    profile: true,
    location: true,
    duration: true,
    stipend: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCheckboxChange = (filterType, value) => {
    const currentValues = filters[filterType] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange(filterType, newValues);
  };

  const handleStipendChange = (min, max) => {
    onFilterChange('stipend', { min, max });
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="clear-all-btn" onClick={onClearAll}>
          Clear all
        </button>
      </div>

      {/* Profile Filter */}
      <div className="filter-section">
        <div 
          className="filter-section-header"
          onClick={() => toggleSection('profile')}
        >
          <h3>Profile</h3>
          <span className={`arrow ${expandedSections.profile ? 'expanded' : ''}`}>
            ▼
          </span>
        </div>
        {expandedSections.profile && (
          <div className="filter-section-content">
            <div className="filter-search">
              <input 
                type="text" 
                placeholder="e.g. Marketing" 
                className="filter-search-input"
              />
            </div>
            <div className="filter-options">
              {['Web Development', 'Marketing', 'Content Writing', 'Graphic Design', 'Data Science', 'Android Development'].map(profile => (
                <label key={profile} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.profile?.includes(profile) || false}
                    onChange={() => handleCheckboxChange('profile', profile)}
                  />
                  <span>{profile}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Location Filter */}
      <div className="filter-section">
        <div 
          className="filter-section-header"
          onClick={() => toggleSection('location')}
        >
          <h3>Location</h3>
          <span className={`arrow ${expandedSections.location ? 'expanded' : ''}`}>
            ▼
          </span>
        </div>
        {expandedSections.location && (
          <div className="filter-section-content">
            <div className="filter-search">
              <input 
                type="text" 
                placeholder="e.g. Delhi" 
                className="filter-search-input"
              />
            </div>
            <div className="filter-options">
              {['Work from home', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai'].map(location => (
                <label key={location} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.location?.includes(location) || false}
                    onChange={() => handleCheckboxChange('location', location)}
                  />
                  <span>{location}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Duration Filter */}
      <div className="filter-section">
        <div 
          className="filter-section-header"
          onClick={() => toggleSection('duration')}
        >
          <h3>Duration</h3>
          <span className={`arrow ${expandedSections.duration ? 'expanded' : ''}`}>
            ▼
          </span>
        </div>
        {expandedSections.duration && (
          <div className="filter-section-content">
            <div className="filter-options">
              {['1 Month', '2 Months', '3 Months', '4 Months', '5 Months', '6 Months'].map(duration => (
                <label key={duration} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.duration?.includes(duration) || false}
                    onChange={() => handleCheckboxChange('duration', duration)}
                  />
                  <span>{duration}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stipend Filter */}
      <div className="filter-section">
        <div 
          className="filter-section-header"
          onClick={() => toggleSection('stipend')}
        >
          <h3>Desired minimum monthly stipend (₹)</h3>
          <span className={`arrow ${expandedSections.stipend ? 'expanded' : ''}`}>
            ▼
          </span>
        </div>
        {expandedSections.stipend && (
          <div className="filter-section-content">
            <div className="stipend-slider">
              <input
                type="range"
                min="0"
                max="10000"
                step="1000"
                value={filters.stipend?.min || 0}
                onChange={(e) => handleStipendChange(parseInt(e.target.value), filters.stipend?.max || 10000)}
                className="slider"
              />
              <div className="stipend-value">
                ₹ {filters.stipend?.min || 0} - ₹ {filters.stipend?.max || 10000}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Filters */}
      <div className="filter-section">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.partTime || false}
            onChange={() => onFilterChange('partTime', !filters.partTime)}
          />
          <span>Part-time</span>
        </label>
      </div>

      <div className="filter-section">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.withJobOffer || false}
            onChange={() => onFilterChange('withJobOffer', !filters.withJobOffer)}
          />
          <span>Internships with job offer</span>
        </label>
      </div>

      <div className="filter-section">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.fastResponse || false}
            onChange={() => onFilterChange('fastResponse', !filters.fastResponse)}
          />
          <span>Fast response</span>
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
