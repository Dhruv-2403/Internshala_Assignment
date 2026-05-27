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
    is_premium_internship,
    part_time,
    work_from_home,
    is_ppo,
  } = internship;

  return (
    <div className="internship-card">
      {/* Card Header */}
      <div className="card-header">
        <div className="card-title-section">
          <h3 className="internship-title">{title}</h3>
          <div className="company-info">
            <span className="company-name">{company_name}</span>
            {is_premium_internship && (
              <span className="actively-hiring-badge">
                <svg className="badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0l2.5 5.5L16 6.5l-4 4 1 5.5L8 13.5 3 16l1-5.5-4-4 5.5-1L8 0z"/>
                </svg>
                Actively hiring
              </span>
            )}
          </div>
        </div>
        <div className="company-logo">
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(company_name)}&background=008bdc&color=fff&size=48&bold=true`} 
            alt={company_name}
          />
        </div>
      </div>

      {/* Card Details */}
      <div className="card-details">
        <div className="detail-item">
          <svg className="detail-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          <span>
            {work_from_home 
              ? 'Work from home' 
              : location_names.length > 0 
                ? location_names.join(', ') 
                : 'Location not specified'}
          </span>
        </div>

        <div className="detail-item">
          <svg className="detail-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
          <span>{stipend?.salary || 'Unpaid'}</span>
        </div>

        <div className="detail-item">
          <svg className="detail-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg>
          <span>{duration || 'Duration not specified'}</span>
        </div>
      </div>

      {/* Description */}
      <div className="card-description">
        <p>
          {title.toLowerCase().includes('web') || title.toLowerCase().includes('software') 
            ? 'Collaborate on web application design, development, maintenance, and optimization using HTML...'
            : title.toLowerCase().includes('data') || title.toLowerCase().includes('analytics')
            ? 'Work on building predictive data models, cleaning large datasets, analyzing business trends...'
            : title.toLowerCase().includes('android') || title.toLowerCase().includes('app')
            ? 'Develop interactive user interfaces, integrate REST API endpoints, and optimize app performance...'
            : title.toLowerCase().includes('marketing') || title.toLowerCase().includes('brand')
            ? 'Contribute to corporate branding strategies, draft daily content copy, drive social media engagement...'
            : 'Work on core system components, coordinate workflows, and optimize team operations...'}
        </p>
      </div>

      {/* Skills Tags */}
      <div className="card-skills">
        {title.toLowerCase().includes('web') || title.toLowerCase().includes('software') ? (
          <>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">JavaScript</span>
          </>
        ) : title.toLowerCase().includes('data') || title.toLowerCase().includes('analytics') ? (
          <>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Machine Learning</span>
          </>
        ) : title.toLowerCase().includes('android') || title.toLowerCase().includes('app') ? (
          <>
            <span className="skill-tag">Kotlin</span>
            <span className="skill-tag">Android SDK</span>
            <span className="skill-tag">Java</span>
          </>
        ) : (
          <>
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">MS Office</span>
          </>
        )}
      </div>

      {/* Footer Tags */}
      <div className="card-footer-tags">
        <div className="left-tags">
          {posted_on && (
            <span className="posted-tag">
              <svg className="tag-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              {posted_on}
            </span>
          )}
          {is_ppo && (
            <span className="ppo-tag">
              <svg className="tag-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
              </svg>
              Job offer post internship
            </span>
          )}
        </div>
        {part_time && (
          <span className="part-time-tag">Part time</span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="card-actions">
        <button className="btn-view-details">View details</button>
        <button className="btn-apply">Apply now</button>
      </div>
    </div>
  );
};

export default InternshipCard;
