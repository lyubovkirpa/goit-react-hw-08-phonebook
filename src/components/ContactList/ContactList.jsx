import PropTypes from "prop-types";
import {ContactItem, Text} from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <Text>{name}:</Text>
              <Text>{number}</Text>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </ContactItem>
          );
        })}
      </ul>
    </>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};


export default ContactList;