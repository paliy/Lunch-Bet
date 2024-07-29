import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { LunchFormType } from '../../types/types';

import Button from '../../atoms/Button/Button';
import NumberInput from '../../atoms/NumberInput/NumberInput';
import TextInput from '../../atoms/TextInput/TextInput';

type FormValues = {
  name: string;
  lunchPrice: number;
};

const LunchForm = ({ addParticipant }: LunchFormType) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addParticipant(data.name, data.lunchPrice);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="lunch-form">
      <TextInput
        {...register('name', { required: true })}
        placeholder='Name'
        data-testid="name-input"
      />
      <NumberInput
        {...register('lunchPrice', { required: true, valueAsNumber: true })}
        placeholder='Lunch Price'
        data-testid="price-input"
      />
      <Button
        type='submit'
        size='medium'
        variant='primary'
        data-testid="submit-button"
      >
        Add Participant
      </Button>
    </form>
  );
};

export default LunchForm;
