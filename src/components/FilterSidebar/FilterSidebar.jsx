import { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, onFilterChange, onClearAll, internships = [] }) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [profileSearch, setProfileSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  const handleStipendChange = (value) => {
    onFilterChange('stipend', { min: parseInt(value), max: 50000 });
  };

  const handleProfileSearch = (e) => {
    const value = e.target.value;
    setProfileSearch(value);
    onFilterChange('profileSearch', value);
  };

  const handleLocationSearch = (e) => {
    const value = e.target.value;
    setLocationSearch(value);
    onFilterChange('locationSearch', value);
  };

  return (
    <aside className="filter-sidebar">
      {/* Profile Search */}
      <div className="filter-group">
        <label className="filter-label">Profile</label>
        <input 
          type="text" 
          placeholder="e.g. Design" 
          className="filter-input"
          value={profileSearch}
          onChange={handleProfileSearch}
        />
      </div>

      {/* Location Search */}
      <div className="filter-group">
        <label className="filter-label">Location</label>
        <input 
          type="text" 
          placeholder="e.g. Delhi" 
          className="filter-input"
          value={locationSearch}
          onChange={handleLocationSearch}
        />
      </div>

      {/* Work from home checkbox */}
      <div className="filter-group">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.location?.includes('Work from home') || false}
            onChange={(e) => {
              const currentLocations = filters.location || [];
              const newLocations = e.target.checked 
                ? [...currentLocations, 'Work from home']
                : currentLocations.filter(loc => loc !== 'Work from home');
              onFilterChange('location', newLocations);
            }}
          />
          <span>Work from home</span>
        </label>
      </div>

      {/* Part-time checkbox */}
      <div className="filter-group">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.partTime || false}
            onChange={() => onFilterChange('partTime', !filters.partTime)}
          />
          <span>Part-time</span>
        </label>
      </div>

      {/* Stipend Slider */}
      <div className="filter-group">
        <label className="filter-label">Desired minimum monthly stipend (₹)</label>
        <div className="stipend-slider-container">
          <input
            type="range"
            min="0"
            max="10000"
            step="2000"
            value={filters.stipend?.min || 0}
            onChange={(e) => handleStipendChange(e.target.value)}
            className="stipend-slider"
          />
          <div className="stipend-labels">
            <span>0</span>
            <span>2K</span>
            <span>4K</span>
            <span>6K</span>
            <span>8K</span>
            <span>10K</span>
          </div>
        </div>
      </div>

      {/* View less filters toggle */}
      <button 
        className="view-filters-btn"
        onClick={() => setShowMoreFilters(!showMoreFilters)}
      >
        {showMoreFilters ? 'View less filters ▲' : 'View more filters ▼'}
      </button>

      {/* More Filters Section */}
      {showMoreFilters && (
        <div className="more-filters">
          {/* Starting from date */}
          <div className="filter-group">
            <label className="filter-label">Starting from (or after)</label>
            <input 
              type="date" 
              className="filter-input"
              placeholder="Choose date"
            />
          </div>

          {/* Max duration */}
          <div className="filter-group">
            <label className="filter-label">Max. duration (months)</label>
            <select className="filter-input">
              <option value="">Choose duration</option>
              <option value="1">1 Month</option>
              <option value="2">2 Months</option>
              <option value="3">3 Months</option>
              <option value="4">4 Months</option>
              <option value="5">5 Months</option>
              <option value="6">6 Months</option>
            </select>
          </div>

          {/* Internships with job offer */}
          <div className="filter-group">
            <label className="filter-checkbox with-info">
              <div className="checkbox-content">
                <input
                  type="checkbox"
                  checked={filters.withJobOffer || false}
                  onChange={() => onFilterChange('withJobOffer', !filters.withJobOffer)}
                />
                <span>Internships with job offer</span>
              </div>
              <span className="info-icon" title="Internships with a pre-placement offer">ⓘ</span>
            </label>
          </div>

          {/* Fast response */}
          <div className="filter-group">
            <label className="filter-checkbox with-info">
              <div className="checkbox-content">
                <input
                  type="checkbox"
                  checked={filters.fastResponse || false}
                  onChange={() => onFilterChange('fastResponse', !filters.fastResponse)}
                />
                <span>Fast response</span>
              </div>
              <span className="info-icon" title="Employers respond within 24 hours">ⓘ</span>
            </label>
          </div>

          {/* Early applicant */}
          <div className="filter-group">
            <label className="filter-checkbox with-info">
              <div className="checkbox-content">
                <input
                  type="checkbox"
                  checked={filters.earlyApplicant || false}
                  onChange={() => onFilterChange('earlyApplicant', !filters.earlyApplicant)}
                />
                <span>Early applicant</span>
              </div>
              <span className="info-icon" title="Be among the first 100 applicants">ⓘ</span>
            </label>
          </div>
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;
