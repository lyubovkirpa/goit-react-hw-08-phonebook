import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from 'components/Filter';
import { Box } from "./Box.styled"



export class App extends Component {
state = {
    contacts: [], 
    filter: '',       
  };


  addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (this.chekName(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return newContact.name;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  chekName = newName => {
    return this.state.contacts.find(({ name }) => name === newName);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };



  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }



  render(){
    const { contacts, filter } = this.state;    
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

  return (
    <>
      <Box>             
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.addContact}/>
      </Box>

      <Box>  
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact}  />        
      </Box> 
    </>
  );
};
};

