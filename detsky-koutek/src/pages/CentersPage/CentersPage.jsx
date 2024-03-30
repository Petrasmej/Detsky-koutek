import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import { CenterDetail } from '../../components/centerDetail/CenterDetail';

export const CentersPage = () => {
  const [center, setCenter] = useState([]);

  useEffect(() => {
    const fetchCenter = async () => {
      try {
        const response = await fetch('/api/centers');
        if (response.ok) {
          const data = await response.json();
          setCenter(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCenter();
  }, []);

  return (
    <div className="container">
      <h1>Centra</h1>
      <nav className="centers">
        {centers.map((center) => (
          <div key={center.id}>
            <Link to={`/pobocky/${center.id}`}>
              <h2>{center.name}</h2>
              <p>{center.address}</p>
            </Link>
          </div>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export const CentersRoutes = () => {
  return (
    <Routes>
      <Route path="/pobocky/:centerId" element={<CenterDetail />} />
    </Routes>
  );
};
