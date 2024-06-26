import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditTask = () => {
	let navigate = useNavigate();

	const { id } = useParams();

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

	useEffect(() => {
		loadTask();
	}, []);

	const loadTask = async () => {
		const result = await axios.get(
			`http://localhost:9192/tasks/task/${id}`
		);
		setTask(result.data);
	};

	const handleInputChange = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value,
		});
	};
	const updateTask = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:9192/tasks/update/${id}`,
			task
		);
		navigate("/view-tasks");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Task</h2>
			<form onSubmit={(e) => updateTask(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstName"
						id="firstName"
						required
						value={firstName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastName"
						id="lastName"
						required
						value={lastName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Your Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="department"
						id="department"
						required
						value={department}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="description">
						Description
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="description"
						id="description"
						required
						value={description}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="duedate">
						Duedate
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="duedate"
						id="duedate"
						required
						value={duedate}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="status">
						Status
					</label>
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
							className="btn btn-outline-success btn-lg">
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

export default EditTask;