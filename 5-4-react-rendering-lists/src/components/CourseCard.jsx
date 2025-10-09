import { useState } from "react";
import TaskItem from "./TaskItem";


export default function CourseCard({ course, index, onMutateCourse }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");


  // 📘 TASK 4 — PART A (Anchor): Implement toggle using onMutateCourse + .map()
  function toggleTask(id) {
        onMutateCourse(index, tasks =>
            tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t)
        );
    }



  // 📘 TASK 4 — PART A (Anchor): Implement delete using onMutateCourse + .filter()
  function deleteTask(id) {
    // TODO: delete the task with this id
  onMutateCourse(index, tasks => tasks.filter(t => t.id !== id));
}


  // 📘 TASK 4 — PART A (Anchor): Implement add using onMutateCourse
  function addTask(e) {
        e.preventDefault();
        const id = Date.now();
        const newTask = {
            id,
            title,
            dueDate: date,
            isDone: false
        }
        onMutateCourse(index, tasks => [...tasks, newTask]);
        setTitle("");
        setDate("");


    }


  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>
        {course.tasks.length > 0 && course.tasks.every(task =>task.isDone) &&
                <span className="badge" >All caught up </span>}
      </header>
      

      {/* 🟩 PART A (Anchor): If NO tasks → show message; ELSE → render the list (ternary ?: ) */}
      <section className="tasksSection">
        {/* 📘 TASK 2 — Render Tasks for Each Course */}
        {course.tasks.length === 0 ? (
         <p>No tasks, ADD</p>) : (
         <ul className="tasks">
          {course.tasks.map(task =>
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}/>)}
          </ul>)}
      </section>

      {/* Add Form (provided) */}
      <form onSubmit={addTask} className="newTask">
        <input
          className="titleField"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          aria-label="Task title"
        />
        <div className="dateRow">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Due date"
          />
          <button type="submit" className="primary">Add</button>
        </div>
      </form>
    </article>
  );
}