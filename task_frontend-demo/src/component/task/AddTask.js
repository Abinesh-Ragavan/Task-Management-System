import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = () => {

let navigate=useNavigate();

    
	const [task, setTask] = useState({
		firstName: "",
		lastName: "",
		email: "",
		department: "",
		description:"",
		duedate:"",
		status:""
	});
	const {
		firstName,
		lastName,
		email,
		department,
		description,
		duedate,
		status
	} = task;

    const handleInputChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value});
    };

const saveTask=async(e)=>{
    e.preventDefault();

    await axios.post("http://localhost:9192/tasks",task);


navigate("/view-tasks");

};




  return (
   
    <div className="col-sm-8 py-2  px-5 bg-secondary">

      <span className="text-center h1 ">Create your Task Here!</span>
      <form onSubmit={(e)=>saveTask(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">FirstName</label>
          <input className="form-control col-sm-6" type="text"
          name="firstName"
          id="firstName"
          required
          value={firstName}
          onChange={(e)=>handleInputChange(e)}
          />
        </div>
         <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">LastName</label>
          <input className="form-control col-sm-6" type="text"
          name="lastName"
          id="lastName"
          required
          value={lastName}
          onChange={(e)=>handleInputChange(e)}
          />
        </div>

       

         <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">Email</label>
          <input className="form-control col-sm-6" type="text"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e)=>handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">Department</label>
          <input className="form-control col-sm-6" type="text"
          name="department"
          id="department"
          required
          value={department}
          onChange={(e)=>handleInputChange(e)}
          />
        </div>

        
         <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="description">Description</label>
          <input className="form-control col-sm-6" type="text"
          name="description"
          id="description"
          required
          value={description}
          onChange={(e)=>handleInputChange(e)}
          />
        </div>
         <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="duedate" >Duedate</label>
          <input className="form-control col-sm-6" type="text"
          name="duedate"
          id="duedate"
          required
          placeholder="dd/mm/yyyy"
          value={duedate}
          onChange={(e)=>handleInputChange(e)}
          />
        </div>


        <div className="input-group mb-5">
  <label className="input-group-text" htmlFor="status">Status</label>
  <select className="form-select col-sm-6"
    name="status"
    id="status"
    required
    value={status}
    onChange={(e) => handleInputChange(e)}
  >
    <option value="">Select status...</option>
    <option value="completed">Completed</option>
    <option value="pending">Pending</option>
  </select>
</div>
        				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-info btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-tasks"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>

      </form>
    </div>
  );
};

export default AddTask;
