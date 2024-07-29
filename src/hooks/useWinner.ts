import { useCallback, useState } from 'react';
import { ParticipantType } from '../types/types';

const useWinner = (participants: ParticipantType[]) => {
  const [winner, setWinner] = useState<string | null>(null);

  const selectWinner = useCallback(() => {
    if (participants.length === 0) return;

    const totalLunchPrice = participants.reduce(
      (sum, { lunchPrice }) => sum + lunchPrice,
      0,
    );
    const randomValue = Math.random() * totalLunchPrice;

    let cumulativeSum = 0;

    for (const { name, lunchPrice } of participants) {
      cumulativeSum += lunchPrice;
      if (randomValue < cumulativeSum) {
        setWinner(name);
        return;
      }
    }
  }, [participants]);

  return { winner, selectWinner };
};

export default useWinner;
