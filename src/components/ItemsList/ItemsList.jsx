import React from 'react';
import styles from './ItemsList.module.css';
export const ItemsList = ({
  items = [],
  selectedItems = new Set(),
  onItemToggle,
  onSelectAll,
  isAllSelected,
  hasItems,
  hasFilteredItems,
}) => {
  if (!hasItems) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyMessage}>No items available in this category.</p>
      </div>
    );
  }

  if (!hasFilteredItems) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyMessage}>No items match your search.</p>
      </div>
    );
  }

  return (
    <div className={styles.listContainer}>
      {/* Select All Option */}
      <div className={styles.selectAllItem}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isAllSelected}
            onChange={e => onSelectAll(e.target.checked)}
            aria-label="Select all items in this category"
          />
          <span className={styles.labelText}>Select All</span>
        </label>
      </div>

      {/* Items List */}
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.listItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedItems.has(item.id)}
                onChange={() => onItemToggle(item.id)}
                aria-label={`Select ${item.label}`}
              />
              <span className={styles.labelText}>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
