export type ParticipantType = {
  name: string;
  lunchPrice: number;
};

export type DisplayWinnerType = {
  winner: string | null;
};

export type LunchFormType = {
  addParticipant: (name: string, lunchPrice: number) => void;
};

export type ParticipantListType = {
  participants: ParticipantType[];
  removeParticipant: (index: number) => void;
};
