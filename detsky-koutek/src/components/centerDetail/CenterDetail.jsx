import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const CenterDetail = () => {
  const { centerId } = useParams();
  const [center, setCenter] = useState(null);

  useEffect(() => {
    const fetchCenter = async () => {
      try {
        const response = await fetch(`/api/centers/${centerId}`);
        const data = await response.json();
        setCenter(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCenter();
  }, []);

  if (!center) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{center.name}</h2>
      <p>{center.address}</p>
      <p>{center.info}</p>
      <p> Oteviraci doba: {center.open}</p>
    </div>
  );
};
