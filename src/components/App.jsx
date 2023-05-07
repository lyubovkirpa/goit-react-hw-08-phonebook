import { Component } from "react";
// import { nanoid } from 'nanoid'
import ContactForm from "components/ContactForm"




export class App extends Component {
state = {
    contacts: [],
    name: '',    
  };

formSabmitHandler = data => {
  console.log(data);
}

  render(){ 

  return (
    <>
         
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.formSabmitHandler}/>        
           
    </>
  );
};
};

