import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import {YearSelector} from '../components/YearSelector'
import {TeamTile} from '../components/TeamTile'

import './MatchPage.scss'

export const MatchPage = () => {

  const [matches, setTeam] = useState([])
  const { teamName, year } = useParams();

  useEffect(
    () => {
      const fetchTeam = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setTeam(data)
      };
      fetchTeam();
    }, [year]
  );

  if (!matches) return null
  return (
    <div className='MatchPage'>
      <div className='select-year'>
        <YearSelector teamName={teamName}></YearSelector>
      </div>
      <div>
  <h1>{teamName} details for the year {year}</h1>
        {matches.map(match => <MatchDetailCard teamName={teamName} match={match}></MatchDetailCard>)}
        </div>
    </div>
  );
}
