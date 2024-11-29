import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [tasks, setTasks] = useState([]);
useEffect(() => {
  const unsubscribe = firestore.collection('tasks').onSnapshot(snapshot => {
    setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  });
  return () => unsubscribe();
}, []); 
// Empty array it will run only once
return (
  <>
  <div>
    <h1>Tasks</h1>
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  </div>
     
    </>
  )
}

export default App
