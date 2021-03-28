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
  /**
   * Name of the tab pane
   */
  tab: string;
  /**
   * Id of the tab pane
   */
  id: string;
  children?: React.ReactNode;
};

const TabPane = ({ tab, id, children }: TabPaneProps) => {
  const activeTab = useContext(ActiveTabContext);

  if (activeTab !== id || !tab) return null;

  return <>{children}</>;
};

type TabsProps = {
  /**
   * Direction of the tabs items
   * @default 'row'
   */
  direction?: 'row' | 'column';
  /**
   * Id of the default active tab pane
   */
  defaultActiveId?: string;
  children?: React.ReactNode;
};

/**
 * Tabs to switch between different views
 */
const Tabs = ({ direction = 'row', defaultActiveId, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  const tabs = useMemo(() => getChildrenTabs(children), [children]);

  useEffect(() => {
    setActiveTab(defaultActiveId);
  }, [defaultActiveId]);

  if (!activeTab || !children) return null;

  return (
    <div className="tabs">
      <ul className={`tabs__list--${direction}`}>
        {tabs?.map((tab, index) => (
          <li
            key={tab.id}
            tabIndex={index}
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

TabPane.displayName = 'TabPane';
Tabs.displayName = 'Tabs';

Tabs.TabPane = TabPane;

export default Tabs;
