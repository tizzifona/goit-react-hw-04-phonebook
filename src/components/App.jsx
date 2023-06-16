import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const App = () => {
  const defaultContacts = [];
  const [contacts, setContacts] = useState(() => {
    const storedContacts = window.localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onInputChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const addNewContact = ({ name, number }) => {
    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { id: nanoid(), name, number };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const filterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const delContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onInputChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={delContact} />
    </div>
  );
};

export default App;

