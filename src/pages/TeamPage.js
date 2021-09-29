import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';

import './TeamPage.scss'

export const TeamPage = () => {

  const [team, setTeam] = useState({ matches: [] })
  const endYear = process.env.REACT_APP_DATA_END_YEAR
  const { teamName } = useParams();
  const more = "More>>"
  // const [matches,setMatch] = useState([])



  useEffect(
    () => {
      const fetchTeam = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}/4`);
        const data = await response.json();
        setTeam(data)
      };
      fetchTeam();
    }, [teamName]
  );

  if (!team || !team.teamName) {
    return <h2>Team not Found</h2>
  }

  return (
    <div className="TeamPage">
      <div className="team-name-component"><h1 className="team-name">{teamName}</h1></div>
      <div><h5 className="win-or-loss"></h5>

      <h3>Win vs Loss</h3>
        <PieChart
          data={[
            { title: 'Loss', value: team.totalMatches - team.totalWins, color: '#aa333d' },
            { title: 'Wins', value: team.totalWins, color: '#4da475' },


          ]}
        />;
        

</div>

      <div className="match-detail-component"><MatchDetailCard teamName={team.teamName} match={team.matches[0]} /></div>
      {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match} />)}
      <div className='more-matches'><Link to={`/teams/${teamName}/matches/${endYear}`}>{more}</Link></div>
    </div>
  );
}

export default TeamPage;
