import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { Container, Box } from '@mui/material';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container component="main">
        <Box
          sx={{
            mt: '64px',
            display: 'flex',

            justifyContent: 'space-between',
          }}
        >
          <ContactForm />
          <Box
            sx={{
              display: 'flex',
              border: '1px solid',
              padding: '5px',
              flexDirection: 'column',
            }}
          >
            <Filter />
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactList />
          </Box>
        </Box>
      </Container>
    </>
  );
}