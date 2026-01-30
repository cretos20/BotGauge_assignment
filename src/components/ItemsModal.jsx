import React from 'react';
import { useState, useCallback, useMemo } from 'react';
import styles from './ItemsModal.module.css';

import {TabHeader} from './TabHeader/TabHeader';
import {SearchInput} from './SearchInput/SearchInput';
import{ItemsList} from './ItemsList/ItemsList';
import {ModalFooter} from './ModalFooter/ModalFooter';


export const ItemsModal = ({ items = {}, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState('fruits');

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedItems, setSelectedItems] = useState({
    fruits: new Set(),
    vegetables: new Set(),
  });

  const currentCategoryItems = useMemo(() => {
    return items[activeTab] || [];
  }, [items, activeTab]);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentCategoryItems;
    }

    const lowerQuery = searchQuery.toLowerCase();
    return currentCategoryItems.filter(item =>
      item.label.toLowerCase().includes(lowerQuery)
    );
  }, [currentCategoryItems, searchQuery]);

  const getSelectedCount = useCallback((category) => {
    return selectedItems[category]?.size || 0;
  }, [selectedItems]);


  const handleItemToggle = useCallback((itemId) => {
    setSelectedItems(prev => {
      const updated = { ...prev };
      const currentSet = new Set(updated[activeTab]);

      if (currentSet.has(itemId)) {
        currentSet.delete(itemId);
      } else {
        currentSet.add(itemId);
      }

      updated[activeTab] = currentSet;
      return updated;
    });
  }, [activeTab]);


  const handleSelectAll = useCallback((isSelectAll) => {
    setSelectedItems(prev => {
      const updated = { ...prev };
      if (isSelectAll) {
        // Select all filtered items
        const allIds = new Set(filteredItems.map(item => item.id));
        updated[activeTab] = allIds;
      } else {
        // Deselect all items in current category
        updated[activeTab] = new Set();
      }
      return updated;
    });
  }, [activeTab, filteredItems]);

  const handleSave = useCallback(() => {
    const result = {
      fruits: Array.from(selectedItems.fruits),
      vegetables: Array.from(selectedItems.vegetables),
    };

    console.log('Selected Items:', result);
    onSave?.(result);
    onClose?.();
  }, [selectedItems, onSave, onClose]);

  const hasSelections = useMemo(() => {
    return Array.from(selectedItems.fruits).length > 0 ||
           Array.from(selectedItems.vegetables).length > 0;
  }, [selectedItems]);

  const isAllSelected = useMemo(() => {
    if (filteredItems.length === 0) return false;
    const currentSet = selectedItems[activeTab];
    return filteredItems.every(item => currentSet.has(item.id));
  }, [filteredItems, selectedItems, activeTab]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {/* Header Section */}
        <TabHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fruitsCount={getSelectedCount('fruits')}
          vegetablesCount={getSelectedCount('vegetables')}
          onClose={onClose}
        />

        {/* Content Section */}
        <div className={styles.modalBody}>
          <h2 className={styles.sectionTitle}>
            Select {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>

          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Search ${activeTab}...`}
          />

          <ItemsList
            items={filteredItems}
            selectedItems={selectedItems[activeTab]}
            onItemToggle={handleItemToggle}
            onSelectAll={handleSelectAll}
            isAllSelected={isAllSelected}
            hasItems={currentCategoryItems.length > 0}
            hasFilteredItems={filteredItems.length > 0}
          />
        </div>

        {/* Footer Section */}
        <ModalFooter
          onCancel={onClose}
          onSave={handleSave}
          isSaveDisabled={!hasSelections}
        />
      </div>
    </div>
  );
};

export default ItemsModal;
