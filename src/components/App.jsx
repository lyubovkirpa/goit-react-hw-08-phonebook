import React,{ Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from 'components/Filter';




export class App extends Component {
state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ], 
    filter: '',       
  };


  addContact = ({ name }) => {
    const newContact = {
      name,
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


  render(){
    const { contacts, filter } = this.state;
    
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

  return (
    <>             
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.addContact}/>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact}  />        
           
    </>
  );
};
};

