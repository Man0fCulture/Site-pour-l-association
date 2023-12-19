import React from 'react';

const appointments = [
    {
      startDate: new Date(2023, 11, 15, 10, 0),
      endDate: new Date(2023, 11, 15, 12, 0),
      title: 'Réunion importante',
    },
    {
      startDate: new Date(2023, 11, 16, 12, 0),
      endDate: new Date(2023, 11, 16, 13, 0),
      title: 'Déjeuner avec un collègue',
    },
    // Ajoutez d'autres rendez-vous selon vos besoins
  ];

function appointments() {
  return appointments;
}

export default appointments;