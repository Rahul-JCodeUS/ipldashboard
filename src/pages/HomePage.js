import { React, useEffect, useState } from 'react';
import {TeamTile} from '../components/TeamTile'

import './HomePage.scss'

export const HomePage = () => {

  const [teams, setTeams] = useState([])
   useEffect(
    () => {
      const fetchAllTeams = async () => {
        const response = await fetch(`http://localhost:8080/teams/`);
        const data = await response.json();
        setTeams(data)
      };
      fetchAllTeams();
    }, []
  );

  return (
      <div className="HomaePage">
      {teams.map(team => <TeamTile teamName={team.teamName}></TeamTile>)}
      </div>
      
  );
}

export default HomePage;
