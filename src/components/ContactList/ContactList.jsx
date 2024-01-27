const accessNumber = {
  "459-12-56": "459-12-56",
  "443-89-12": "443-89-12",
  "645-17-79": "645-17-79",
  "227-91-26": "227-91-26",
};

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>+380 {accessNumber[item.number]}</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
