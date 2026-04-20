import { useState } from "react";

export default function AddHabitForm({addHabits}) {
    const [input,setInput]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()

        addHabits(input)
        setInput("")
    }
  return (
    <div style={{ marginBottom: '20px' }}>
     <form onSubmit={handleSubmit}>
         <input value={input} type="text" placeholder="Enter a new habit..." onChange={(e)=>setInput(e.target.value)}/>
      <button >Add Habit</button>
     </form>
    </div>
  );
}