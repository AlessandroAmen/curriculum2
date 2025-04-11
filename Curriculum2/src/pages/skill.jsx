import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Navskill from '../components/Navskill';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Skill = () => {
  const languages = useSelector(state => state.languages);

  const labels = languages.map(lang => lang.nome);
  const percentages = languages.map(lang => parseInt(lang.percentuale));

  const data = {
    labels,
    datasets: [
      {
        label: 'Percentuale di competenza',
        data: percentages,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Competenze Linguaggi',
      },
    },
  };

  return (
    <div>
      <Navskill />
      <div style={{ width: '70%', margin: 'auto', paddingTop: '20px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Skill;