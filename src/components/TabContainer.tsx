import React, { useState } from 'react';
import './style.css';

export type TabContainerStyleType = {
  buttons?: React.CSSProperties;
  content?: React.CSSProperties;
  button?: React.CSSProperties;
  container?: React.CSSProperties;
};
export interface ITabContainerProps {
  names?: string[];
  btnClassName?: string;
  bodyClassName?: string;
  onTabClick?: (tabIndex: number, evt: React.MouseEvent<HTMLDivElement>) => void;
  onTabChange?: (prevIndex: number, nextIndex: number) => void;
  style?: TabContainerStyleType;
}

export const TabContainer: React.FC<ITabContainerProps> = ({
  children,
  names,
  btnClassName,
  bodyClassName,
  onTabClick,
  onTabChange,
  style,
}) => {
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

  function tabClickHandler(tabIndex: number, evt: React.MouseEvent<HTMLDivElement>) {
    onTabClick && typeof onTabClick === 'function' && onTabClick(tabIndex, evt);
    setActiveTab((old) => {
      onTabChange &&
        typeof onTabChange === 'function' &&
        old !== tabIndex &&
        onTabChange(old, tabIndex);
      return tabIndex;
    });
  }

  return (
    <div className="tab-container" style={style?.container || {}}>
      <div
        className={addClassToDefault(btnClassName, 'tab-container__buttons')}
        style={style?.buttons || {}}
      >
        {tabButtons.map((btn, indx) => {
          return (
            <div
              className={`tab-container__button ${
                indx === activeTab ? 'tab-container__button_active' : ''
              }`}
              key={btn + indx}
              onClick={tabClickHandler.bind(null, indx)}
              style={style?.button || {}}
            >
              {btn}
            </div>
          );
        })}
      </div>
      <div
        className={addClassToDefault(bodyClassName, 'tab-container__content')}
        style={style?.content || {}}
      >
        {elements[activeTab]}
      </div>
    </div>
  );
};

function addClassToDefault(className: string | undefined | null, defaultClassName: string) {
  return (className ? [defaultClassName, className] : [defaultClassName]).join(' ');
}
