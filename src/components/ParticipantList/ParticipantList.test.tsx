import { render, screen, fireEvent } from '@testing-library/react';
import ParticipantList from './ParticipantList';

describe('ParticipantList', () => {
  const NO_PARTICIPANTS_TEXT = 'No participants';
  const PARTICIPANT_1 = 'John Doe - $15.50';
  const PARTICIPANT_2 = 'Jane Smith - $20.75';
  const REMOVE_BUTTON_TEXT = 'Remove';

  it('renders a list of participants correctly', () => {
    const participants = [
      { name: 'John Doe', lunchPrice: 15.50 },
      { name: 'Jane Smith', lunchPrice: 20.75 },
    ];

    render(<ParticipantList participants={participants} removeParticipant={() => { }} />);

    expect(screen.getByText(PARTICIPANT_1)).toBeInTheDocument();
    expect(screen.getByText(PARTICIPANT_2)).toBeInTheDocument();
  });

  it('renders no participants message when the list is empty', () => {
    render(<ParticipantList participants={[]} removeParticipant={() => { }} />);

    expect(screen.getByText(NO_PARTICIPANTS_TEXT)).toBeInTheDocument();
  });

  it('removes a participant when the remove button is clicked', () => {
    const participants = [
      { name: 'John Doe', lunchPrice: 15.50 },
      { name: 'Jane Smith', lunchPrice: 20.75 },
    ];

    const removeParticipant = jest.fn();
    render(<ParticipantList participants={participants} removeParticipant={removeParticipant} />);

    expect(screen.getAllByText(REMOVE_BUTTON_TEXT)).toHaveLength(2);

    fireEvent.click(screen.getAllByText(REMOVE_BUTTON_TEXT)[0]);

    expect(removeParticipant).toHaveBeenCalledWith(0);
  });
});
