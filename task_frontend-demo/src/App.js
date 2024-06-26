import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Home from "./Home";

import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TaskView from "./component/task/TaskView";
import AddTask from "./component/task/AddTask";
import EditTask from "./component/task/EditTask";
import TaskPofile from "./component/task/TaskProfile";
import FindIdTask from "./component/task/FindIdTask";
import StatusCheck from "./component/task/StatusCheck";

function App() {
  return (
    <main className="container mt-5">
      
      
      <Router>
        <NavBar />
        <Routes >
          <Route exact path="/" element={<TaskView />}></Route>
          <Route exact path="/view-tasks" element={<TaskView />}></Route>
          <Route exact path="/add-tasks" element={<AddTask />}></Route>
           <Route exact path="/edit-task/:id" element={<EditTask />}></Route>
           <Route exact path="/task-profile/:id" element={<TaskPofile />}></Route>
            <Route exact path="/find-IdTask" element={<FindIdTask />}></Route>


           <Route exact path="/find-ByStatusTask" element={< StatusCheck/>}></Route>


        </Routes>
        
      </Router>
    </main>
  );
}

export default App;
