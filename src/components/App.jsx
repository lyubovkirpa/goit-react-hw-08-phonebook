import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Box } from './Box.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (chekName(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return newContact.name;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const chekName = newName => {
    return contacts.find(({ name }) => name === newName);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Box>

      <Box>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts()} onDelete={deleteContact} />
      </Box>
    </>
  );
};
