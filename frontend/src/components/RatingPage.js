import React, { useState, useEffect } from 'react';
import api from '../api';

const RatingPage = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const response = await api.get('/stores');
      setStores(response.data);
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h1>Stores</h1>
      {stores.map((store) => (
        <div key={store.id}>
          <h2>{store.name}</h2>
          <p>{store.address}</p>
          <p>Rating: {store.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingPage;