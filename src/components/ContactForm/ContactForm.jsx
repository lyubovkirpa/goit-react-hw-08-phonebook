import { useState } from 'react';
import { FormStyle, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const phone = event.currentTarget.elements.phone.value;

    const newContact = contacts.find(contact => contact.name === name);

    if (newContact) {
      alert(`${name}is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));

    reset();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormStyle>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required="Name required"
            />
          </Label>

          <Label>
            Number
            <Input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required="Phone number required"
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </FormStyle>
      </form>
    </>
  );
};

export default ContactForm;
