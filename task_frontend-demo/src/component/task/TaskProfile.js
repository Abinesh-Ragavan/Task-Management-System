import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskPofile = () => {
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

	useEffect(() => {
		loadTask();
	}, []);

	const loadTask = async () => {
		const result = await axios.get(
			`http://51.21.130.88:9192/tasks/task/${id}`
		);
		setTask(result.data);
	};

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${task.firstName} ${task.lastName}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											First Nmae
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Last Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.lastName}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Department
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.department}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Description
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.description}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											DueDate
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.duedate}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Status
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.status}
										</p>
									</div>
								</div>
								





							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TaskPofile;