import "./App.css";
import { useState } from "react";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

const initialUsers = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [nameFilter, setNameFilter] = useState("");

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  const visibleUsers = users.filter((user) =>
    user.username.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div style={{ padding: 8 }}>
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList items={visibleUsers} onDelete={deleteUser} />
    </div>
  );
};
