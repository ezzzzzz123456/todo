export default function HabitCard({ habit,toggleHabit,deleteHabit}) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
      <span>{habit.name}</span>
      <button onClick={()=>{toggleHabit(habit.id)}} >{habit.completed?"undo":"done"}</button>
    <button onClick={()=>{deleteHabit(habit.id)}}>delete</button>
    </div>
  );
}