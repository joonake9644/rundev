export default function Events() {
  const events = [
    {
      day: '15',
      month: 'DEC',
      title: 'CONCRETE NIGHT RUN',
      description: '도시의 밤을 달리는 특별한 야간 러닝 이벤트',
      location: '한강공원',
      time: '19:00',
      capacity: '30명'
    },
    {
      day: '22',
      month: 'DEC',
      title: 'INDUSTRIAL MARATHON',
      description: '산업 단지를 관통하는 풀 마라톤 코스',
      location: '성수동',
      time: '06:00',
      capacity: '100명'
    },
    {
      day: '29',
      month: 'DEC',
      title: 'YEAR-END PARTY',
      description: '한 해를 마무리하는 멤버들과의 특별한 모임',
      location: '클럽하우스',
      time: '18:00',
      capacity: '전체'
    }
  ]

  return (
    <section id="events" className="events-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <div className="title-underline"></div>
        </div>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-date">
                <span className="date-day">{event.day}</span>
                <span className="date-month">{event.month}</span>
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-details">
                  <span>📍 {event.location}</span>
                  <span>⏰ {event.time}</span>
                  <span>👥 {event.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
