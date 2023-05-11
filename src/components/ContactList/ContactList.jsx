import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem"

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
    <ul>    
        {contacts.map(contact => (
            <ContactListItem
            key={contact.id}
            renderListItem={contact}
            onDeleteContact={onDelete}
            />            
          )
        )}    
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
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default ContactList;