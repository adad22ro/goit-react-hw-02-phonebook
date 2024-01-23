import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
