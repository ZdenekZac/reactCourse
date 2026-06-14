export default function Item({ it, onDelete, onToggle }) {
  return (
    <li key={it.id}>
      <input type="checkbox" value={it.packed} onChange={() => onToggle(it.id)} />
      <span style={it.packed ? { textDecoration: "line-through" } : {}}>
        {it.quantity} {it.description}
      </span>
      <button onClick={() => onDelete(it.id)}>❌</button>
    </li>
  );
}
