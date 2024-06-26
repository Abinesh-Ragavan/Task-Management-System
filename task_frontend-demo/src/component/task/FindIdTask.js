import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FindIdTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchData(inputValue);
    }
  };

  const fetchData = async (id) => {
    try {
      setError(null); // Clear any previous errors before fetching
      const response = await fetch(`http://localhost:9192/tasks/task/${id}`);
      if (!response.ok) {
        throw new Error('ID does not exist');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setData(null); // Clear previous data
      setError(`The ID ${id} does not exist`);
    }
  };

  const handleButtonClick = () => {
    if (inputValue) {
      fetchData(inputValue);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <div className="input-group mb-3">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter ID"
            className="form-control"
          />
          <button onClick={handleButtonClick} className="btn btn-primary">
            Fetch Data
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {data && (
          <div className="card shadow-lg" style={{ width: '100%' }}>
            <div className="card-body">
              <h5 className="card-title">{data.firstName} {data.lastName}</h5>
              <p className="card-text">Email: {data.email}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Department: {data.Ddpartment}</li>
              <li className="list-group-item">Description: {data.description}</li>
              <li className="list-group-item">Duedate: {data.duedate}</li>
              <li className="list-group-item">Status: {data.status}</li>
              
            </ul>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default FindIdTask;
