function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}


export default function DueBadge({dueDate}) {
    // 🟩 PART C (Anchor):
    // 1) Call daysUntil(dueDate) → const d = ...
    const d = daysUntil(dueDate);
    // 2) Use a ternary chain to set the label:
    const label =
        d < 0 ? "Overdue" :
        d === 0 ? "Due today" :
        d === 1 ? "1 day remaining" :
        `${d} days remaining`;

    // 3) Return <span className="badge"> with extra class:
    // "danger" if overdue, "warn" if due today
    const className =
        d < 0 ? "danger" :
        d === 0 ? "warning" : "badge";

    return <span className="badge">{label}</span>;
}