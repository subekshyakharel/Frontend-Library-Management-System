import React from 'react';
import { Card } from 'react-bootstrap';

const Box = ({ title, amount, Icon, color = '#0d6efd' }) => {
  return (
    <Card
      style={{
        width: '18rem',
        border: 'none',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        padding: '1.2rem',
      }}
    >
      <Card.Body className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Text
              style={{
                fontSize: '0.95rem',
                color: '#6c757d',
                fontWeight: '500',
              }}
            >
              {title}
            </Card.Text>
            <Card.Title
              style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#343a40',
              }}
            >
              {amount}
            </Card.Title>
          </div>
          <div
            style={{
              backgroundColor: `${color}20`,
              color: color,
              borderRadius: '12px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon size={28} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Box;
