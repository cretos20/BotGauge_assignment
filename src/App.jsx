import React, { useState } from 'react';
import {ItemsModal} from './components/ItemsModal';
import './App.css';

// Sample data
const SAMPLE_ITEMS = {
  fruits: [
    { id: 'apple', label: 'Apple' },
    { id: 'banana', label: 'Banana' },
    { id: 'orange', label: 'Orange' },
    { id: 'mango', label: 'Mango' },
    { id: 'grape', label: 'Grape' },
    { id: 'strawberry', label: 'Strawberry' },
    { id: 'blueberry', label: 'Blueberry' },
    { id: 'kiwi', label: 'Kiwi' },
    { id: 'pineapple', label: 'Pineapple' },
    { id: 'watermelon', label: 'Watermelon' },
  ],
  vegetables: [
    { id: 'carrot', label: 'Carrot' },
    { id: 'broccoli', label: 'Broccoli' },
    { id: 'spinach', label: 'Spinach' },
    { id: 'tomato', label: 'Tomato' },
    { id: 'lettuce', label: 'Lettuce' },
    { id: 'cucumber', label: 'Cucumber' },
    { id: 'bell-pepper', label: 'Bell Pepper' },
    { id: 'onion', label: 'Onion' },
    { id: 'garlic', label: 'Garlic' },
    { id: 'potato', label: 'Potato' },
  ],
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedItems, setSavedItems] = useState(null);

  const handleSave = (selectedItems) => {
    // Handle saved items
    setSavedItems(selectedItems);
    console.log('Items saved:', selectedItems);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#111827', marginBottom: '30px' }}>
          Items Modal Demo
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            display: 'block',
            margin: '0 auto',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '40px',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#2563eb'}
          onMouseLeave={e => e.target.style.backgroundColor = '#3b82f6'}
        >
          Open Modal
        </button>

        {savedItems && (
          <div
            style={{
              backgroundColor: '#dbeafe',
              border: '1px solid #93c5fd',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <h3 style={{ marginTop: 0, color: '#1e40af' }}>
              ✓ Items Saved Successfully!
            </h3>
            <pre
              style={{
                backgroundColor: 'white',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto',
                color: '#374151',
              }}
            >
              {JSON.stringify(savedItems, null, 2)}
            </pre>
          </div>
        )}

        {isModalOpen && (
          <ItemsModal
            items={SAMPLE_ITEMS}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}

export default App;