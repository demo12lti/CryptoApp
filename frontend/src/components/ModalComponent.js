import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { fetchPrices } from '../action';

const ModalComponent = ({ isOpen, onClose }) => {
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(fetchPrices(symbol));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Select Stock/Crypto</h2>
      <input value={symbol} onChange={(e) => setSymbol(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ModalComponent;
