import { render, screen, fireEvent } from '@testing-library/react';
import LunchForm from './LunchForm';

describe('LunchForm', () => {
  const addParticipant = jest.fn();

  beforeEach(() => {
    render(<LunchForm addParticipant={addParticipant} />);
  });

  it('renders form elements correctly', () => {
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Lunch Price')).toBeInTheDocument();
    expect(screen.getByText('Add Participant')).toBeInTheDocument();
  });

  it('does not call addParticipant if form is invalid', async () => {
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Lunch Price'), { target: { value: '' } });

    fireEvent.click(screen.getByText('Add Participant'));

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(addParticipant).not.toHaveBeenCalled();
  });
});
