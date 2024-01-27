const accessType = {
  r: "Read",
  w: "Write",
  m: "Maintain",
};

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.username}</p>
          <p>{accessType[item.access]}</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
