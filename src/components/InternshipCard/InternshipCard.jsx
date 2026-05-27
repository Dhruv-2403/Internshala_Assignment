import './InternshipCard.css';

const InternshipCard = ({ internship }) => {
  const {
    company_name,
    title,
    location_names = [],
    start_date,
    duration,
    stipend,
    posted_on,
    is_premium,
    employment_type,
  } = internship;

  return (
    <div className="internship-card">
      {is_premium && (
        <div className="premium-badge">
          <span>⭐</span> Premium
        </div>
      )}

      <div className="card-header">
        <div className="card-title-section">
          <h3 className="internship-title">{title}</h3>
          <p className="company-name">{company_name}</p>
        </div>
        <div className="company-logo">
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(company_name)}&background=006bff&color=fff&size=48`} 
            alt={company_name}
          />
        </div>
      </div>

      <div className="card-details">
        <div className="detail-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location_names.length > 0 ? location_names.join(', ') : 'Not specified'}</span>
        </div>

        <div className="detail-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{duration || 'Not specified'}</span>
        </div>

        <div className="detail-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{stipend?.salary || 'Unpaid'}</span>
        </div>

        {employment_type && (
          <div className="detail-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{employment_type}</span>
          </div>
        )}
      </div>

      <div className="card-tags">
        {start_date && (
          <span className="tag">
            <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {start_date}
          </span>
        )}
        {posted_on && (
          <span className="tag posted-tag">Posted {posted_on}</span>
        )}
      </div>

      <div className="card-footer">
        <button className="btn-view-details">View details</button>
        <button className="btn-apply">Apply now</button>
      </div>
    </div>
  );
};

export default InternshipCard;
