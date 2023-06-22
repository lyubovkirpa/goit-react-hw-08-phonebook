import PropTypes from 'prop-types';
import {
  SearchList,
  ContactItem,
  Text,
  Button,
} from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <SearchList>
        <Text>{name}:</Text>
        <Text>{phone}</Text>
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
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
