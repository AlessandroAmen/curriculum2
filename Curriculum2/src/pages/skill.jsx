import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navskill from '../components/Navskill';

const Skill = () => {
  const languages = useSelector(state => state.languages);

  return (
    <div>
       <Navskill></Navskill>
    </div>
  );
};

export default Skill;