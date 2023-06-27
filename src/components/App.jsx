import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Box } from './Box.styled';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const promise = dispatch(fetchContacts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);


  return (
    <>
      <Box>
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <p>Request in progress...</p>}
        {error && <p>Something goes wrong</p>}
        <ContactList />
      </Box>
    </>
  );
};
