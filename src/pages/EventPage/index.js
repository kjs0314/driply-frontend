import React from 'react';
import './index.css';

const events = [
    { id: 1, status: '진행중', period: '25/01/21~25/05/01' },
    { id: 2, status: '진행중', period: '25/01/21~25/05/01' },
    { id: 3, status: '진행중', period: '25/01/21~25/05/01' },
    { id: 4, status: '진행중', period: '25/01/21~25/05/01' },
    { id: 5, status: '진행중', period: '25/01/21~25/05/01' },
    { id: 6, status: '진행중', period: '25/01/21~25/05/01' },
    { id: 7, status: '종료', period: '25/01/21~25/05/01' },
    { id: 8, status: '종료', period: '25/01/21~25/05/01' },
];

const EventPage = () => (
    <div className="main">
        {' '}
        <div className="event-page">
            <div className="event-grid">
                {events.map((event, idx) => (
                    <div className="event-card" key={event.id}>
                        <div className="event-image-placeholder" />
                        <div className="event-card-footer">
                            <span className={`event-status${event.status === '종료' ? ' ended' : ''}`}>
                                {event.status}
                            </span>
                            <span className="event-period">{event.period}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default EventPage;
