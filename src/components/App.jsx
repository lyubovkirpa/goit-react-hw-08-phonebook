// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Box } from './Box.styled';

export const App = () => {
  return (
    <>
      <Box>
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </>
  );
};
