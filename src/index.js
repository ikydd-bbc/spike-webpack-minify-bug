import transformedFirstClassTournamentData from './data.json';

const { participants: firstClassParticipants } = transformedFirstClassTournamentData.tournaments[0].stages[0].rounds[0];

const firstClassParticipantsWithoutBatting = firstClassParticipants.map(participant => ({
  ...participant,
  battingBonus: undefined
}));


console.log(firstClassParticipantsWithoutBatting);