import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import classNames from 'classnames';

const ActiveTabContext = createContext({});

const getChildrenTabs = (children): { name: string; id: string }[] => {
  const tabs = React.Children.map(children, child => {
    return { name: child.props.tab, id: child.props.id };
  });

  return tabs;
};

type TabPaneProps = {
  tab: string;
  id: string;
  children?: React.ReactNode;
};

const TabPane = ({ tab, id, children }: TabPaneProps) => {
  const activeTab = useContext(ActiveTabContext);

  if (activeTab !== id || !tab) return null;

  return <>{children}</>;
};

type TabsProps = {
  direction?: 'row' | 'column';
  defaultActiveKey?: string;
  children?: React.ReactNode;
};

const Tabs = ({ direction = 'row', defaultActiveKey, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  const tabs = useMemo(() => getChildrenTabs(children), [children]);

  useEffect(() => {
    setActiveTab(defaultActiveKey);
  }, [defaultActiveKey]);

  if (!activeTab || !children) return null;

  return (
    <div className="tabs">
      <ul className={`tabs__list--${direction}`}>
        {tabs?.map(tab => (
          <li
            key={tab.id}
            className={classNames({
              tabs__item: true,
              active: activeTab === tab.id
            })}
          >
            <button
              type="button"
              name={tab.name}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      <ActiveTabContext.Provider value={activeTab}>
        <div className="tabs__content">{children}</div>
      </ActiveTabContext.Provider>
    </div>
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
