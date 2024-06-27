import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StatusCheck = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchData(inputValue);
    }
  };

  const fetchData = async (status) => {
    try {
      setError(null); // Clear any previous errors before fetching
      const response = await fetch(`http://51.21.130.88:9192/tasks/task/findbystatus/${status}`);
     
      const result = await response.json();
       if (result.length === 0) {
      throw new Error('No tasks found with the selected status');
    }
      setTasks(result); // Assuming result is an array of tasks
    } catch (error) {
      setTasks([]); // Clear previous data
      setError(`Failed to fetch tasks with status: ${status}`);
    }
  };

  const handleButtonClick = () => {
    if (inputValue) {
      fetchData(inputValue);
    }
  };

  return (
    <div className="container mt-5">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <div className="input-group mb-3">
             <select
            value={inputValue}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
         
          <button onClick={handleButtonClick} className="btn btn-primary">
            Fetch Data
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {tasks.length > 0 && (
          <div className='row '>
            {tasks.map((task, index) => (
              <div key={index} className=" col-lg-12 mb-4  d-flex card shadow-lg mb-3" >
                <div className="card-body">
                  <h5 className="card-title">{task.firstName} {task.lastName}</h5>
                  <p className="card-text">Email: {task.email}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Department: {task.department}</li>
                  <li className="list-group-item">Description: {task.description}</li>
                  <li className="list-group-item">Due Date: {task.dueDate}</li>
                  <li className="list-group-item">Status: {task.status}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusCheck;
