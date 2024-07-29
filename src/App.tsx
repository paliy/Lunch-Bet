import useParticipants from './hooks/useParticipants';
import useWinner from './hooks/useWinner';

import LunchForm from './components/LunchForm/LunchForm';
import ParticipantList from './components/ParticipantList/ParticipantList';
import WinnerDisplay from './components/Winner/WinnerDisplay';

const App = () => {
  const { participants, addParticipant, removeParticipant } = useParticipants();
  const { winner, selectWinner } = useWinner(participants);

  return (
    <div>
      <h1>Lunch Bet</h1>
      <LunchForm addParticipant={addParticipant} />
      <ParticipantList
        participants={participants}
        removeParticipant={removeParticipant}
      />
      <button className='winner-button' onClick={selectWinner}>Select Winner</button>
      <WinnerDisplay winner={winner} />
    </div>
  );
};

export default App;
