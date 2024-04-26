"use client";
import { FC, useState } from 'react';

type tab = {
  id: number;
  label: string;
  content: React.ReactNode;
};

interface TabProps {
  tabs: tab[];
}

const Tab: FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab !== tab.id ? 'text-bold' : 'text-blue-500'}  py-2 px-4 block hover:text-blue-800 focus:outline-none`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'} py-2`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
