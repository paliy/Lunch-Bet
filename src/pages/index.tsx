import useParticipants from '../hooks/useParticipants';
import useWinner from '../hooks/useWinner';

import LunchForm from '../components/LunchForm/LunchForm';
import ParticipantList from '../components/ParticipantList/ParticipantList';
import WinnerDisplay from '../components/Winner/WinnerDisplay';
import Button from '../atoms/Button/Button';

const LunchBetApp = () => {
  const { participants, addParticipant, removeParticipant } = useParticipants();
  const { winner, selectWinner } = useWinner(participants);

  return (
    <>
      <h1>Lunch Bet</h1>
      <LunchForm addParticipant={addParticipant} />
      <ParticipantList
        participants={participants}
        removeParticipant={removeParticipant}
      />
      <Button
        onClick={selectWinner}
        size="large"
        variant="primary"
        disabled={participants.length === 0}
      >
        Select Winner
      </Button>
      <WinnerDisplay winner={winner} />
    </>
  );
};

export default LunchBetApp;
