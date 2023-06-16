import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = visibleContacts();

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, number }) => {
          return;
          <ContactListItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
