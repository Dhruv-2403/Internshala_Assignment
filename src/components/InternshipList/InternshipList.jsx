import { useMemo } from 'react';
import InternshipCard from '../InternshipCard/InternshipCard';
import './InternshipList.css';

const InternshipList = ({ internships, filters, isLoading, error }) => {
  // Debug logging
  console.log('InternshipList received:', { 
    internships, 
    internshipsLength: internships?.length,
    isLoading, 
    error 
  });

  // Filter internships based on selected filters
  const filteredInternships = useMemo(() => {
    if (!internships || internships.length === 0) return [];

    const filtered = internships.filter(internship => {
      // Profile search filter
      if (filters.profileSearch) {
        const searchTerm = filters.profileSearch.toLowerCase();
        const matchesTitle = internship.title?.toLowerCase().includes(searchTerm);
        const matchesCompany = internship.company_name?.toLowerCase().includes(searchTerm);
        if (!matchesTitle && !matchesCompany) return false;
      }

      // Location search filter
      if (filters.locationSearch) {
        const searchTerm = filters.locationSearch.toLowerCase();
        const matchesLocation = internship.location_names?.some(loc => 
          loc.toLowerCase().includes(searchTerm)
        );
        const matchesWFH = internship.work_from_home && searchTerm.includes('work from home');
        if (!matchesLocation && !matchesWFH) return false;
      }

      // Profile filter
      if (filters.profile && filters.profile.length > 0) {
        const matchesProfile = filters.profile.some(profile => 
          internship.title?.toLowerCase().includes(profile.toLowerCase())
        );
        if (!matchesProfile) return false;
      }

      // Location filter
      if (filters.location && filters.location.length > 0) {
        const matchesLocation = filters.location.some(location => {
          if (location === 'Work from home') {
            return internship.work_from_home === true;
          }
          return internship.location_names?.some(loc => 
            loc.toLowerCase().includes(location.toLowerCase())
          );
        });
        if (!matchesLocation) return false;
      }

      // Duration filter
      if (filters.duration && filters.duration.length > 0) {
        const matchesDuration = filters.duration.some(duration => {
          const durationNum = parseInt(duration);
          const internshipDuration = internship.duration?.toLowerCase() || '';
          return internshipDuration.includes(durationNum.toString()) || 
                 internshipDuration.includes(duration.toLowerCase());
        });
        if (!matchesDuration) return false;
      }

      // Stipend filter
      if (filters.stipend && filters.stipend.min > 0) {
        const stipendText = internship.stipend?.salary || '';
        const stipendMatch = stipendText.match(/₹\s*([\d,]+)/);
        if (stipendMatch) {
          const stipendAmount = parseInt(stipendMatch[1].replace(/,/g, ''));
          if (stipendAmount < filters.stipend.min) return false;
        } else if (filters.stipend.min > 0) {
          return false;
        }
      }

      // Part-time filter
      if (filters.partTime) {
        if (!internship.part_time) return false;
      }

      // With job offer filter
      if (filters.withJobOffer) {
        if (!internship.is_ppo) return false;
      }

      return true;
    });

    console.log('🔍 Filtering:', {
      totalInternships: internships.length,
      filteredCount: filtered.length,
      activeFilters: filters
    });

    return filtered;
  }, [internships, filters]);

  if (isLoading) {
    return (
      <div className="internship-list">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading internships...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="internship-list">
        <div className="error-state">
          <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>Failed to load internships</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!internships || internships.length === 0) {
    return (
      <div className="internship-list">
        <div className="empty-state">
          <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3>No internships available</h3>
          <p>Check back later for new opportunities</p>
        </div>
      </div>
    );
  }

  return (
    <div className="internship-list">
      <div className="list-header">
        <h2>{filteredInternships.length} Total Internships</h2>
        <p>Latest Summer Internships in India</p>
      </div>

      {filteredInternships.length === 0 ? (
        <div className="no-results">
          <svg className="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3>No internships match your filters</h3>
          <p>Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="cards-grid">
          {filteredInternships.map((internship, index) => (
            <InternshipCard key={internship.id || index} internship={internship} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InternshipList;
