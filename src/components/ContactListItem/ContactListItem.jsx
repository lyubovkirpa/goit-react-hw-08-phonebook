import PropTypes from 'prop-types';
import { ContactItem, Text } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <Text>{name}:</Text>
      <Text>{number}</Text>

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
