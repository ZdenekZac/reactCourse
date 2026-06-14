export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items into your packinglist 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const perc = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      🎒
      <em>
        {numPacked === numItems
          ? "You've got everything, you're ready to GO ✈️"
          : `you have ${numItems} items on your list, and you already packed ${numPacked} (${perc}%)🎒`}
      </em>
    </footer>
  );
}
