import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { DisplayWinnerType } from '../../types/types';

const WinnerDisplay = ({ winner }: DisplayWinnerType) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (winner) {
      setShowConfetti(true);

      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  return (
    <div className='winner-wrapper'>
      {showConfetti && <Confetti data-testid="confetti" />}
      {winner ? (
        <h2 data-testid="winner-message">{winner} - pays for lunch!</h2>
      ) : (
        <h2 data-testid="no-winner-message">No winner selected yet</h2>
      )}
    </div>
  );
};

export default WinnerDisplay;
