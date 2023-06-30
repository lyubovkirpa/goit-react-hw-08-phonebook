import PropTypes from 'prop-types';
import {
  SearchList,
  ContactItem,
  Text,
  Button,
} from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <SearchList>
        <Text>{name}:</Text>
        <Text>{number}</Text>
      </SearchList>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
