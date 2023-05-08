import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid'



class ContactForm extends Component{
static propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
  state = {
    name: '',
    number: '',   
  }

  handleChange = event => {
    const {name, value} = event.currentTarget;
    this.setState
    ({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.name === this.props.onSubmit(this.state)){
      return;
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name 
          <input
            type='text' 
            name='name'
            value={name} 
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label> 

        <label htmlFor={this.nameInputId}>
          Number 
          <input
            type='tel' 
            name='number'
            value={number} 
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label> 

        <button type="submit">Add contact</button>
      </form>
    );
  }
}


export default ContactForm;