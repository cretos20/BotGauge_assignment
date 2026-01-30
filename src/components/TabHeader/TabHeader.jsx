import React from 'react';
import styles from './TabHeader.module.css';

export const TabHeader = ({
  activeTab,
  onTabChange,
  fruitsCount,
  vegetablesCount,
  onClose,
}) => {
  const tabs = [
    { id: 'fruits', label: 'Fruits', count: fruitsCount },
    { id: 'vegetables', label: 'Vegetables', count: vegetablesCount },
  ];

  const handleTabKeyDown = (e, tabId) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextTab = tabId === 'fruits' ? 'vegetables' : 'fruits';
      onTabChange(nextTab);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevTab = tabId === 'vegetables' ? 'fruits' : 'vegetables';
      onTabChange(prevTab);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Add Items</h1>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>
      </div>

      <div className={styles.tabsContainer} role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={e => handleTabKeyDown(e, tab.id)}
            type="button"
          >
            <span className={styles.tabLabel}>{tab.label}</span>
            <span className={styles.tabCount}>{tab.count}</span>
          </button>
        ))}
      </div>
    </header>
  );
};