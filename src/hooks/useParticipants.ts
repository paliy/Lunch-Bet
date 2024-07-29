import { useCallback, useState } from 'react';
import { ParticipantType } from '../types/types';

const useParticipants = () => {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);

  const addParticipant = useCallback((name: string, lunchPrice: number) => {
    setParticipants((prev) => [...prev, { name, lunchPrice }]);
  }, []);

  const removeParticipant = useCallback((index: number) => {
    setParticipants((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return { participants, addParticipant, removeParticipant };
};

export default useParticipants;
