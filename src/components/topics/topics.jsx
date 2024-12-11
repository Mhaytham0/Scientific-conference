import React from 'react';
import './topics.css';

function ConferenceTopics() {
  return (
    <div className="conference-topics">
      <h2 className="conference-title">محاور المؤتمر</h2>
      <div className="conference-divider"></div>
      <div className="conference-content">
        <ul>
          <li>دور العلوم المالية في قضايا التنمية المستدامة – مثلث Nexus (الماء – الطاقة – الغذاء).</li>
          <li>دور العلوم الإدارية في قضايا التنمية المستدامة – مثلث Nexus (الماء – الطاقة – الغذاء).
          </li>
          <li>دور العلوم الاقتصادية في قضايا التنمية المستدامة – مثلث Nexus (الماء – الطاقة – الغذاء).</li>
          <li>دور العلوم المعرفية المتكاملة والمتعددة في قضايا التنمية المستدامة – مثلث Nexus (الماء – الطاقة – الغذاء).</li>
          
        </ul>
      </div>
    </div>
  );
}

export default ConferenceTopics;
