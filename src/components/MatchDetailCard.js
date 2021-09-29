import { React } from 'react';
import { Link } from 'react-router-dom'

import './MatchDetailCard.scss'

export const MatchDetailCard = ({ teamName, match }) => {
  if (!match || !teamName) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const teamWon = teamName === match.matchWinner

  return (

    <div className={teamWon ? 'MatchDetailCard match-won' : 'MatchDetailCard match-lost'}>
      <div>
        <span className='vs'>vs</span>
        <h2> <Link to={otherTeamRoute}>{otherTeam}</Link></h2>
        <h3 className="match-date">{match.date}</h3>
        <h3 className="match-venue">{match.venue}</h3>
        <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
      </div>
      <div className="additional-info">
      <h3>TOSS Decesion</h3>
        <p>{match.tossWinner} won toss and choose to {match.tossDecision}</p>
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>M.O.M</h3>
        <p>{match.playerOfMatch}</p>
        <h3>UMPIRES</h3>
        <p>{match.umpire1},{match.umpire1}</p>
       
      </div >
    </div>
  );
}


