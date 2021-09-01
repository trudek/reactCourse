import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shooping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    }
  ])
  // const name = 'Damian'
  // const x = true
  return (
    <div className="container">
      {/* <h1>hello {name}</h1>
      <h2>hello {1+1}</h2>
      <h2>hello {x ? 'yes' : 'no'}</h2> */}
      <Header />
      <Tasks tasks ={tasks}/>
    </div>
  );
}

export default App;
