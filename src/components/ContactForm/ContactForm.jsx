// import PropTypes from 'prop-types';


const { Component } = require("react");


class ContactForm extends Component{
  state = {
    contacts: [],
    name: '', 
  }

  handleChange = event => {
    const {name, value} = event.currentTarget;
    this.setState
    ({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name <input
           type='text' 
           name='name'
           value={this.state.name} 
           onChange={this.handleChange}
            />
        </label>        
        <button type="submit">Add contact</button>
      </form>
    );
  }
}



// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;