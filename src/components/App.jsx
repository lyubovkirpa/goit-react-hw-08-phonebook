import React,{ Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "components/ContactForm"




export class App extends Component {
state = {
    contacts: [],        
  };


  addContact = ({ name, number }) => {
    const newContact = {
      name,     
      id: nanoid(),
    };

   
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  chekName = newName => {
    return this.state.contacts.find(({ name }) => name === newName);
  };


  render(){    
 

  return (
    <> 
            
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.addContact}/>        
           
    </>
  );
};
};

