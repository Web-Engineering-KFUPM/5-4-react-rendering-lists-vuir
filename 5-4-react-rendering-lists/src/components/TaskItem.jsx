import DueBadge from "./DueBadge";


export default function TaskItem({ task, onToggle, onDelete }) {
return (
<li className="task" key={task.id}>
<label className="taskMain">
{/* 🟩 PART B (Anchor): Checkbox exists; students should wire onToggle(task.id) */}



{!task.isDone && <DueBadge dueDate={task.dueDate} />}



<span className="title">{task.title}</span>
</label>
<input type="checkbox" onChange={()=> onToggle(task.id)} checked={task.isDone} />


{/* 🟩 PART B (Anchor): Delete button should call onDelete(task.id) */}
<button className="ghost" aria-label="Delete task" onClick={()=>onDelete(task.id)}>
✕
</button>
</li>
);
}