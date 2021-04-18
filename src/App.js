import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"

import Header from './components/Header'
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"

const myTasks = []



function App() {

  const fetchTasks = async () => {
    const data = await fetch("http://localhost:5000/tasks")
    const tasks = await data.json()
    return tasks
  }

  const fetchTaskById = async (id) => {
    const data = await fetch(`http://localhost:5000/tasks/${id}`)
    const task = await data.json()
    return task
  }


  useEffect(() => {
    const getTasks = async() => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    }
    
    getTasks();
  }, []);

  const [tasks, setTasks] = useState(myTasks);

  const [formIsVisible, setFormIsVisible] = useState(false)

  const deleteTaskById = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"})
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addNewTask = async(task) => {
    const data = await fetch("http://localhost:5000/tasks",  
      {method: "POST", 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(task)})

    task = await data.json()
    setTasks([...tasks, task])
  }

  const toggleReminder = async(id) => {
    let task = await fetchTaskById(id);
    if (!task) return;

    const data = await fetch(`http://localhost:5000/tasks/${task.id}`,  
      {method: "PUT", 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({...task, reminder: !task.reminder})}
      )

    task = await data.json()

    
    setTasks(tasks.map((t) => {
      if (t.id == id) {
        return {...t, reminder: task.reminder}
      } else {
        return t
      }
    }))
  }

  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" toggleForm={() => setFormIsVisible(!formIsVisible)} isVisible={formIsVisible} />
        <Route path="/" exact render={(props) => (
          <>
            {formIsVisible ? <AddTask onSubmit={addNewTask} /> : ""}
            {tasks.length > 0 ?
              <Tasks
                tasks={tasks}
                onDelete={deleteTaskById}
                onTaskDoubleClick={toggleReminder} /> : "No Task To show"}
          </>
        )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
