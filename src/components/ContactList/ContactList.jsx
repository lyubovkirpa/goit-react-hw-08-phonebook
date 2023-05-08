import PropTypes from "prop-types";
import {SearchList, ContactItem, Text, Button} from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
    <ul>    
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <SearchList>
              <Text>{name}:</Text>
              <Text>{number}</Text>
              </SearchList>
              <Button type="button" onClick={() => onDelete(id)}>
                Delete
              </Button>
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