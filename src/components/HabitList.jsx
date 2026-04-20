import HabitCard from "./HabitCard";

export default function HabitList({items,toggleHabit,deleteHabit}) {
  

  return (
    <div>
      {items.map((habit) => (
        <HabitCard key={habit.id} habit={habit} toggleHabit={toggleHabit} deleteHabit={deleteHabit}/>
      ))}
    </div>
  );
}