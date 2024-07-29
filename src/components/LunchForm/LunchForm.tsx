import React, { useState } from 'react';

import { LunchFormType } from '../../types/types';

const LunchForm = ({ addParticipant }: LunchFormType) => {
  const [name, setName] = useState('');
  const [lunchPrice, setLunchPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addParticipant(name, parseFloat(lunchPrice));
    setName('');
    setLunchPrice('');
  };

  return (
    <form onSubmit={handleSubmit} data-testid="lunch-form">
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        required
        data-testid="name-input"
      />
      <input
        type='number'
        value={lunchPrice}
        onChange={(e) => setLunchPrice(e.target.value)}
        placeholder='Lunch Price'
        required
        data-testid="price-input"
      />
      <button type='submit' data-testid="submit-button">Add Participant</button>
    </form>
  );
};

export default LunchForm;
