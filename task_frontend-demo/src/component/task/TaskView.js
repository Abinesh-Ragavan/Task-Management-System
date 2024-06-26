import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa"
import { Link } from 'react-router-dom';
import Search from '../common/Search';
const TaskView = () => {
    const [tasks,setTasks]=useState([]);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        loadTasks();
    },[])

    const loadTasks=async()=>{
        const result =await axios.get("http://localhost:9192/tasks",{validateStatus:()=>{
            return true;
        }});
        if(result.status===302){
            setTasks(result.data); 
        }
        // setStudents(result.data);
    };


    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:9192/tasks/delete/${id}`);
        loadTasks();

    }
  return (
    <section>
        <Search search={search}
        setSearch={setSearch}
        />
        <table className="table table-bordered table-hover shadow">
            <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>DueDate</th>
                    <th>Status</th>
                    <th colSpan="3">Actions</th>
                </tr>

            </thead>

            <tbody className="text-center">
                {tasks.filter((st)=>st.firstName.toLowerCase().includes(search))
                
                
                
                
                .map((task,index)=>(
                     <tr key={task.id}>
                        <th scope="row" key={index}>
                            {index+1}
                        </th>
                    <td>{task.firstName}</td>
                    <td>{task.lastName}</td>
                        <td>{task.email}</td>
                         
                          <td>{task.duedate}</td>
                          <td>{task.status}</td>
                            <td className="mx-2">
                              <Link to={`/task-profile/${task.id}`} className="btn btn-info"><FaEye/></Link>
                                </td>
                              <td  className="mx-2">
                                <Link to={`/edit-task/${task.id}`} className="btn btn-warning"><FaEdit/></Link>
                                </td>
                              <td className="mx-2">
                                <button className="btn btn-danger"
                                onClick={()=>handleDelete(task.id)}
                                ><FaTrashAlt/></button>
                                </td>
                </tr>

                ))}
               
            </tbody>
        </table>

    </section>
  )
}

export default TaskView