import Button from '../../atoms/Button/button';
import { ParticipantListType } from '../../types/types';

const ParticipantList = ({ participants, removeParticipant }: ParticipantListType) => {
  return (
    <ul>
      {participants.length === 0 ? (
        <li>No participants</li>
      ) : (
        participants.map((participant, index) => (
          <li key={index}>
            {participant.name} - ${participant.lunchPrice.toFixed(2)}
            <Button
              onClick={() => removeParticipant(index)}
              size='medium'
              variant='primary'
              data-testid="remove-button"
            >
              Remove
            </Button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ParticipantList;
