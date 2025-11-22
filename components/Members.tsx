export default function Members() {
  const members = [
    {
      initials: 'KJ',
      name: '김준호',
      role: 'CREW LEADER',
      years: '5년',
      races: '15회'
    },
    {
      initials: 'SY',
      name: '이서영',
      role: 'EVENT ORGANIZER',
      years: '3년',
      races: '8회'
    },
    {
      initials: 'MH',
      name: '박민혁',
      role: 'TRAINING COACH',
      years: '7년',
      races: '23회'
    },
    {
      initials: 'JY',
      name: '최지영',
      role: 'COMMUNITY MANAGER',
      years: '2년',
      races: '5회'
    }
  ]

  return (
    <section id="members" className="members-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">CREW MEMBERS</h2>
          <div className="title-underline"></div>
        </div>
        <div className="members-grid">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-avatar">
                <span className="avatar-text">{member.initials}</span>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="member-stats">
                  <span>🏃 {member.years}</span>
                  <span>🏆 {member.races}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
