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
            <button onClick={() => removeParticipant(index)}>Remove</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ParticipantList;
