import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an AbortController instance to signal if the request should be canceled
    const controller = new AbortController();

    const getData = async () => {
      try {
        // Include the AbortController's signal in the request config
        const response = await axiosInstance.get('/api/data-endpoint', {
          signal: controller.signal,
        });
        setData(response.data);
        setLoading(false);
      } catch (err) {
        // Check if the error is due to an aborted request
        if (err.name === 'CanceledError') {
          console.log('Request canceled');
        } else {
          setError('Failed to fetch data');
          setLoading(false);
        }
      }
    };

    getData();

    // Cleanup function to cancel the request if the component unmounts
    // This isn't strictly neccessary since the controller is already aborted
    // I'm just using it here to train my muscle memory to use them in the event I need them, just so I don't forget about them
    return () => {
      controller.abort();
    };
  }, []); // Runs only once when the component mounts

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Data from API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="space-y-2">
          {data.length > 0 ? (
            data.map((item, index) => (
              <li key={index} className="p-2 bg-gray-100 rounded-md">
                {JSON.stringify(item)}
              </li>
            ))
          ) : (
            <p>No data available</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
