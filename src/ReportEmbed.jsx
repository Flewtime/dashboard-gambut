import React from 'react';

const ReportEmbed = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/c72204c2-5159-4782-83da-7aca185c45a0/page/DQO7D"
        style={{ width: '100%', height: '100%', border: 0 }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
}

export default ReportEmbed;
