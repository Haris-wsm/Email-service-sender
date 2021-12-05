import React from 'react';
import './Landing.css';

const SERVICES = [
  {
    title: 'Sevice Email Sender',
    plaintext: 'Email sender service for send emails to clients',
    icon: 'email'
  },
  {
    title: 'Statistic',
    plaintext: 'Show statistic Question that reply from emails',
    icon: 'show_chart'
  },
  {
    title: 'Campaign',
    plaintext: 'Create a campaign only 1$',
    icon: 'tag_faces'
  }
];

export default function Landing() {
  const renderContent = () => {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h1>Emaily</h1>
          Collect feedback from your user
        </div>
        <div className="divider m3" style={{ marginTop: '3rem' }}></div>
        <div className="row " style={{ margin: '2rem 0', padding: '2rem 0' }}>
          {renderServicesContent()}
        </div>
      </>
    );
  };

  const renderServicesContent = () => {
    return SERVICES.map(({ title, plaintext, icon }) => {
      return (
        <div className="col s12 m4 ">
          <div class="row">
            <div class="col s12 ">
              <div class="card-panel dashboad">
                <i class="large material-icons dashboad-thumb">{icon}</i>

                <span class=" dashboad-plaintext">{plaintext}</span>
                <h5 class=" dashboad-title">{title}</h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return renderContent();
}
