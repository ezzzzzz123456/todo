import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import ProgressBar from "./components/ProgressBar"
import SearchHabit from "./components/SearchHabit";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [habits,setHabits]=useState(()=>{
    const saved=localStorage.getItem("pulse-habits")
    return saved? JSON.parse(saved):[]
  })
  const [searchTerm,setSearchTerm]=useState("")
  useEffect(()=>{
    localStorage.setItem("pulse-habits",JSON.stringify(habits))
  },[habits])
    const addHabits=(name)=>{
      const newHabit={id:Date.now(),name:name,completed:false}
      setHabits([...habits,newHabit])
    }
    const toggleHabit=(id)=>{
      setHabits(habits.map(habit=>{
        if(habit.id===id){
          return {...habit,completed:!habit.completed}
        }
        return habit
      }))

    }
    const deleteHabit=(id)=>{
      const updatedHabits=habits.filter((habit)=>{
        return habit.id!==id
      })
      setHabits(updatedHabits)
    }
    const progress=(habits)=>{
      const total=habits.length
      const completedHabits=habits.filter((h)=>h.completed).length
      const progressPer=total>0?Math.round((completedHabits/total)*100):0
      return progressPer
    }
    const searchHabits=()=>{
        const s=habits.filter((h)=>h.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return s
    }

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Pulse-Point</h1>
      <SearchHabit setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <AddHabitForm addHabits={addHabits}/>
      <HabitList items={searchHabits()} toggleHabit={toggleHabit} deleteHabit={deleteHabit}/>
      <ProgressBar percentage={progress(habits)}/>
    </div>
  );
}

export default App;