import { render, screen, fireEvent } from '@testing-library/react';

import LunchForm from './LunchForm';

const BUTTON_TEXT = 'Add Participant';

describe('LunchForm', () => {
  const mockAddParticipant = jest.fn();

  beforeEach(() => {
    mockAddParticipant.mockClear();
  });

  it('renders form fields and submit button', () => {
    render(<LunchForm addParticipant={mockAddParticipant} />);

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Lunch Price')).toBeInTheDocument();
    expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
  });

  it('updates input values correctly', () => {
    render(<LunchForm addParticipant={mockAddParticipant} />);

    const nameInput = screen.getByPlaceholderText('Name') as HTMLInputElement;
    const priceInput = screen.getByPlaceholderText('Lunch Price') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(priceInput, { target: { value: '20' } });

    expect(nameInput.value).toBe('John Doe');
    expect(priceInput.value).toBe('20');
  });

  it('calls addParticipant with correct arguments and clears inputs on submit', () => {
    render(<LunchForm addParticipant={mockAddParticipant} />);

    const nameInput = screen.getByPlaceholderText('Name') as HTMLInputElement;
    const priceInput = screen.getByPlaceholderText('Lunch Price') as HTMLInputElement;
    const submitButton = screen.getByText(BUTTON_TEXT) as HTMLButtonElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(priceInput, { target: { value: '20' } });

    fireEvent.click(submitButton);

    expect(mockAddParticipant).toHaveBeenCalledWith('John Doe', 20);

    expect(nameInput.value).toBe('');
    expect(priceInput.value).toBe('');
  });
});
