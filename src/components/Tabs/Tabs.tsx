import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';

import Divider from '../Divider';

const ActiveTabContext = createContext({});

function getChildrenTabs(children): { name: string; id: string }[] {
  const tabs = React.Children.map(children, child => {
    return { name: child.props.tab, id: child.props.id };
  });

  return tabs;
}

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

function TabPane({ tab, id, children }: TabPaneProps) {
  const activeTab = useContext(ActiveTabContext);

  if (activeTab !== id || !tab) return null;

  return <>{children}</>;
}

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
  /**
   * Custom filter component
   */
  filters?: React.ReactNode[];
  children?: React.ReactNode;
};

/**
 * Tabs to switch between different views
 */
function Tabs({
  direction = 'row',
  defaultActiveId,
  filters,
  children
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  const tabs = useMemo(() => getChildrenTabs(children), [children]);

  useEffect(() => {
    setActiveTab(defaultActiveId);
  }, [defaultActiveId]);

  if (!activeTab || !children) return null;

  return (
    <div className="pm-c-tabs">
      <div className="pm-c-tabs__header">
        <ul className={`pm-c-tabs__list--${direction}`}>
          {tabs?.map((tab, index) => (
            <li
              key={tab.id}
              tabIndex={index}
              className={classNames({
                'pm-c-tabs__item': true,
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
        {!isUndefined(filters) && !isEmpty(filters) ? (
          <div className="pm-c-tabs__filters">
            {filters.map(filter => (
              <>
                {filter}
                <Divider variant="circle" />
              </>
            ))}
          </div>
        ) : null}
      </div>

      <ActiveTabContext.Provider value={activeTab}>
        <div className="pm-c-tabs__content">{children}</div>
      </ActiveTabContext.Provider>
    </div>
  );
}

Tabs.displayName = 'Tabs';

Tabs.TabPane = TabPane;

export default Tabs;
