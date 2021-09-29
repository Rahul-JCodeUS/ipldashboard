import {React} from 'react';
import {Link} from 'react-router-dom'

export const MatchSmallCard = ({teamName,match}) => {

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherTeam}`;
  const teamWon = teamName === match.matchWinner

  return (
    <div className={teamWon ? 'MatchSmallCard match-won' : 'MatchSmallCard match-lost'}>
      <span className='vs'>vs</span>
      <h2> <Link to={otherTeamRoute}>{otherTeam}</Link></h2>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}


