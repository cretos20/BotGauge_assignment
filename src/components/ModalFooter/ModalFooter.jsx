import React from 'react';
import styles from './ModalFooter.module.css';

export const ModalFooter = ({ onCancel, onSave, isSaveDisabled = false }) => {
  return (
    <footer className={styles.footer}>
      <button
        type="button"
        className={styles.cancelButton}
        onClick={onCancel}
      >
        Cancel
      </button>

      <button
        type="button"
        className={`${styles.saveButton} ${isSaveDisabled ? styles.disabled : ''}`}
        onClick={onSave}
        disabled={isSaveDisabled}
      >
        Save
      </button>
    </footer>
  );
};
