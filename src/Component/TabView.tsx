import React, { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const TabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabChange(1)}>Tab 1</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabChange(2)}>Tab 2</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabChange(3)}>Tab 3</a>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 onNavigateToTab3={() => handleTabChange(3)} />}
        {activeTab === 3 && <Tab3 />}
      </div>
    </div>
  );
};

export default TabView;
