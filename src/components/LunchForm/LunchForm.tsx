import React, { useState } from 'react';

import { LunchFormType } from '../../types/types';

import Button from '../../atoms/Button/button';
import NumberInput from '../../atoms/NumberInput/NumberInput';
import TextInput from '../../atoms/TextInput/TextInput';

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
      <TextInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        required
        data-testid="name-input"
      />
      <NumberInput
        value={lunchPrice}
        onChange={(e) => setLunchPrice(e.target.value)}
        placeholder='Lunch Price'
        required
        data-testid="price-input"
      />
      <Button type='submit' size='medium' variant='primary' data-testid="submit-button">
        Add Participant
      </Button>
    </form>
  );
};

export default LunchForm;
