import React, { useState } from 'react';
import './style.css';

interface ITabContainerProps {
  names?: string[];
}

export const TabContainer: React.FC<ITabContainerProps> = ({ children, names }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const elements: React.ReactNodeArray = Array.isArray(children) ? [...children] : [children];

  let tabButtons: string[] = [];
  if (names && names.length === elements.length) {
    tabButtons = names;
  } else {
    let indx = 1;
    elements.forEach((el) => {
      el && Object.keys(el).includes('props') && (el as { props: any }).props.caption
        ? tabButtons.push((el as { props: any }).props.caption)
        : tabButtons.push(`default ${indx++}`);
    });
  }

  return (
    <div className="tab-container">
      <div className="tab-container__buttons">
        {tabButtons.map((btn, indx) => {
          return (
            <div
              className={`tab-container__button ${
                indx === activeTab ? 'tab-container__button_active' : ''
              }`}
              key={btn + indx}
              onClick={() => setActiveTab(indx)}
            >
              {btn}
            </div>
          );
        })}
      </div>
      <div className="tab-containre__content">{elements[activeTab]}</div>
    </div>
  );
};
