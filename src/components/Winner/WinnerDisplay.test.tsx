import { render, screen, waitFor } from '@testing-library/react';

import WinnerDisplay from './WinnerDisplay';

const confetti = 'confetti'
const winnerMessage = 'winner-message'
const noWinnerMessage = 'no-winner-message'


// Mock the react-confetti module
jest.mock('react-confetti', () => () => <div data-testid={confetti}>Confetti</div>);

describe('WinnerDisplay', () => {
  const noWinnerText = 'No winner selected yet';

  it('renders no winner message when no winner is provided', () => {
    render(<WinnerDisplay winner={null} />);

    expect(screen.getByTestId(noWinnerMessage)).toHaveTextContent((noWinnerText));
    expect(screen.queryByTestId(confetti)).toBeNull();
  });

  it('renders winner message when winner is provided', () => {
    render(<WinnerDisplay winner="John Doe" />);

    expect(screen.getByTestId(winnerMessage)).toHaveTextContent('John Doe pays for lunch!');
    expect(screen.getByTestId(confetti)).toBeInTheDocument();
  });

  it('shows and hides confetti based on winner', async () => {
    const { rerender } = render(<WinnerDisplay winner={null} />);

    expect(screen.queryByTestId(confetti)).toBeNull();

    rerender(<WinnerDisplay winner="Jane Doe" />);

    expect(screen.getByTestId(confetti)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId(confetti)).toBeNull();
    }, { timeout: 6000 });
  }, 7000);
});
